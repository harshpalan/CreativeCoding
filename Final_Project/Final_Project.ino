int butt1 = 2;
int butt2 = 3;

int trigPin = 9;
int echoPin = 10;

int butt1State, butt2State = 0;

void setup() {
  pinMode(butt1, INPUT);
  pinMode(butt2, INPUT);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  digitalWrite(trigPin, HIGH);
  
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH);
  int distance = (duration * 0.0343) / 2;
  Serial.print(distance,DEC);
  // a short delay between readings:
  delay(10);

  butt1State = digitalRead(butt1);
  butt2State = digitalRead(butt2);
  if (butt1State == HIGH && butt2State != HIGH) {
    Serial.print(",sine");
    // Serial.println();
  } else if (butt2State == HIGH && butt1State != HIGH) {
    Serial.print(",sawtooth");
    // Serial.println();
  } else if (butt1State == HIGH && butt2State == HIGH) {
    Serial.print(",square");
    // Serial.println();
  }
  Serial.println();
  delay(100);
}