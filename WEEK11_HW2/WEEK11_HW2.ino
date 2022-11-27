int greenLed = 5;
int redLed1 = 4;
int redLed2 = 3;
int blueLed = 2;

int ldrPin = A0;

void setup() {
  Serial.begin(9600);

  pinMode(greenLed, OUTPUT);
  pinMode(redLed1, OUTPUT);
  pinMode(redLed2, OUTPUT);
  pinMode(blueLed, OUTPUT);
  pinMode(ldrPin, INPUT);
}

void loop() {
  int ldrStatus = analogRead(ldrPin);
  Serial.println(ldrStatus);
  if (ldrStatus < 200) {
    digitalWrite(blueLed, HIGH);
    digitalWrite(greenLed, HIGH);
    digitalWrite(redLed1, HIGH);
    digitalWrite(redLed2, HIGH);
  } else if (ldrStatus > 200 && ldrStatus < 450) {
    digitalWrite(redLed2, HIGH);
    digitalWrite(greenLed, HIGH);
    digitalWrite(redLed1, HIGH);
    digitalWrite(blueLed, LOW);
  } else if (ldrStatus > 450 && ldrStatus < 700) {
    digitalWrite(redLed1, HIGH);
    digitalWrite(redLed2, LOW);
    digitalWrite(blueLed, LOW);
    digitalWrite(greenLed, HIGH);
  } else if (ldrStatus > 700) {
    digitalWrite(greenLed, HIGH);
    digitalWrite(redLed1, LOW);
    digitalWrite(redLed2, LOW);
    digitalWrite(blueLed, LOW);
  } else {
    digitalWrite(greenLed, LOW);
    digitalWrite(redLed1, LOW);
    digitalWrite(redLed2, LOW);
    digitalWrite(blueLed, LOW);
  }
  delay(150);
}