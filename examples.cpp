#include <SPI.h>
#include <WiFi101.h>

char ssid[] = "FAMILIA RAMIREZ";
char password[] = "Familiaramirez2611";
int status = WL_IDLE_STATUS;                     // the Wifi radio's status

void setup() {
  //Initialize serial and wait for port to open:
  Serial.begin(115200);

  // attempt to connect to Wifi network:
  while ( status != WL_CONNECTED) {
    Serial.print("Attempting to connect to WEP network, SSID: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, password);

    // wait 10 seconds for connection:
    delay(10000);
  }

  // once you are connected :
  Serial.print("You're connected to the network");
}

void loop() {
  // check the network status connection once every 10 seconds:
  delay(10000);
 Serial.println(WiFi.status());
}
