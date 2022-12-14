void setup() {
  Serial.begin(9600);  // open serial port, set the baud rate to 9600 bps
}
void loop() {
  int val, val2;
  val = analogRead(0);   //connect mic sensor to Analog 0
  val2 = analogRead(1);  //connect mic sensor to Analog 0

  Serial.print(val,DEC);  //print the sound value to serial
  Serial.print(",");  //print the sound value to serial
  Serial.println(val2,DEC);  //print the sound value to serial
  Serial.print("\n");
  delay(100);
}