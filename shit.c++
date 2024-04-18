#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>
#include <WiFi101.h>
#include <ArduinoHttpClient.h>

#define DHTPIN 2
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

char ssid[] = "FAMILIA RAMIREZ";
char password[] = "Familiaramirez2611";
char supabaseUrl[] = "https://wcszydhbtzlzgxgohfiu.supabase.co";
char supabaseKey[] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indjc3p5ZGhidHpsemd4Z29oZml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5MTUyMTQsImV4cCI6MjAyNjQ5MTIxNH0.nC1LsUL8oA5DEDEuUl70gb2iKDIf_GkW7upbi2yk27s";

WiFiSSLClient wifi;
HttpClient httpClient = HttpClient(wifi, supabaseUrl);

void setup() {
  Serial.begin(115200);
  dht.begin();
  lcd.begin();
  
  Serial.println("wep");
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
  Serial.println(WiFi.localIP());

}

void loop() {
  delay(2000);

  float h = dht.readHumidity();
  float t = dht.readTemperature();

  lcd.clear(); // Limpiamos el LCD antes de imprimir nuevos datos

  lcd.setCursor(0, 0);
  lcd.print("Humedad: ");
  lcd.print(h);
  lcd.print(" %");

  lcd.setCursor(0, 1);
  lcd.print("Temperatura: ");
  lcd.print(t);
  lcd.print(" °C");

  String payload = "{\"temperature\": " + String(t) + ", \"humidity\": " + String(h) + "}";

  httpClient.beginRequest();
  httpClient.post("https://wcszydhbtzlzgxgohfiu.supabase.co", "application/json", payload);
  httpClient.sendHeader("apikey", supabaseKey);
  httpClient.sendHeader("Prefer", "return=representation");
  int statusCode = httpClient.responseStatusCode();
  httpClient.responseBody(); // Discard the response body
  httpClient.stop();

  if (statusCode == 201) {
    Serial.println("Data sent to Supabase successfully!");
  } else {
    Serial.println("Failed to send data to Supabase. Status code: " + String(statusCode));
  }
}
