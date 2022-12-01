int repeat = 1;

void setup() {
  for (int i = 3; i <= 13; i++)
    pinMode(i, OUTPUT);
}

void loop() {

  for (int i = 0; i <= repeat; i++) {
    pattern1();
  }
  for (int i = 0; i <= repeat; i++) {
    pattern2();
  }
  for (int i = 0; i <= repeat; i++) {
    pattern3();
  }
  for (int i = 0; i <= repeat; i++) {
    pattern4();
  }
  for (int i = 0; i <= repeat; i++) {
    pattern5();
  }
  for (int i = 0; i <= repeat; i++) {
    pattern6();
  }
  for (int i = 0; i <= repeat; i++) {
    pattern7();
  }
  for (int i = 0; i <= repeat; i++) {
    pattern8();
  }
  for (int i = 0; i <= repeat; i++) {
    pattern9();
  }
}

void pattern1() {
  for (int i = 3; i <= 13; i++) {
    digitalWrite(i, HIGH);
    delay(100);
    digitalWrite(i, LOW);
  }

  for (int i = 11; i >= 4; i--) {
    digitalWrite(i, HIGH);
    delay(100);
    digitalWrite(i, LOW);
  }
}
void pattern2() {
  for (int i = 3; i <= 13; i++) {
    digitalWrite(i, HIGH);
    digitalWrite(i - 1, HIGH);
    digitalWrite(i + 1, HIGH);
    delay(100);
    digitalWrite(i, LOW);
    digitalWrite(i - 1, LOW);
    digitalWrite(i + 1, LOW);
  }

  for (int i = 11; i >= 4; i--) {
    digitalWrite(i, HIGH);
    digitalWrite(i - 1, HIGH);
    digitalWrite(i + 1, HIGH);
    delay(100);
    digitalWrite(i, LOW);
    digitalWrite(i - 1, LOW);
    digitalWrite(i + 1, LOW);
  }
}
void pattern3() {
  for (int i = 3; i <= 13; i = i + 2) {
    digitalWrite(i, HIGH);
    delay(100);
    digitalWrite(i, LOW);
  }

  for (int i = 13; i >= 3; i = i - 2) {
    digitalWrite(i, HIGH);
    delay(100);
    digitalWrite(i, LOW);
  }
}
void pattern4() {
  for (int i = 3; i <= 13; i++) {
    digitalWrite(i, HIGH);
    delay(100);
  }

  for (int i = 13; i >= 2; i--) {
    digitalWrite(i, HIGH);
    delay(100);
    digitalWrite(i, LOW);
  }
}
void pattern5() {
  for (int i = 3; i <= 13; i++) {
    digitalWrite(i, HIGH);
  }
  delay(100);
  for (int i = 3; i <= 13; i++) {
    digitalWrite(i, LOW);
  }
  delay(100);
}
void pattern6() {
  for (int i = 3; i <= 8; i++) {
    digitalWrite(i, HIGH);
  }
  for (int i = 8; i <= 13; i++) {
    digitalWrite(i, LOW);
  }
  delay(200);
  for (int i = 3; i <= 8; i++) {
    digitalWrite(i, LOW);
  }
  for (int i = 8; i <= 13; i++) {
    digitalWrite(i, HIGH);
  }
  delay(200);
}
void pattern7() {
  for (int i = 3; i <= 13; i = i + 2) {
    digitalWrite(i, HIGH);
  }
  for (int i = 4; i <= 13; i = i + 2) {
    digitalWrite(i, LOW);
  }
  delay(200);
  for (int i = 3; i <= 13; i = i + 2) {
    digitalWrite(i, LOW);
  }
  for (int i = 4; i <= 13; i = i + 2) {
    digitalWrite(i, HIGH);
  }
  delay(200);
}
void pattern8() {
  digitalWrite(7, HIGH);
  digitalWrite(8, HIGH);
  delay(50);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  delay(50);
  digitalWrite(6, HIGH);
  digitalWrite(9, HIGH);
  delay(50);
  digitalWrite(6, LOW);
  digitalWrite(9, LOW);
  delay(50);
  digitalWrite(5, HIGH);
  digitalWrite(10, HIGH);
  delay(50);
  digitalWrite(5, LOW);
  digitalWrite(10, LOW);
  delay(50);
  digitalWrite(4, HIGH);
  digitalWrite(11, HIGH);
  delay(50);
  digitalWrite(4, LOW);
  digitalWrite(11, LOW);
  delay(50);
  digitalWrite(3, HIGH);
  digitalWrite(13, HIGH);
  delay(50);
  digitalWrite(3, LOW);
  digitalWrite(13, LOW);
  delay(50);
  digitalWrite(4, HIGH);
  digitalWrite(11, HIGH);
  delay(50);
  digitalWrite(4, LOW);
  digitalWrite(11, LOW);
  delay(50);
  digitalWrite(5, HIGH);
  digitalWrite(10, HIGH);
  delay(50);
  digitalWrite(5, LOW);
  digitalWrite(10, LOW);
  delay(50);
  digitalWrite(6, HIGH);
  digitalWrite(9, HIGH);
  delay(50);
  digitalWrite(6, LOW);
  digitalWrite(9, LOW);
  delay(50);
}

void pattern9() {
  for (int i = 3; i <= 13; i++) {
    digitalWrite(i, HIGH);
  }
  for (int i = 3; i <= 13; i++) {
    digitalWrite(i, LOW);
    delay(100);
    digitalWrite(i, HIGH);
  }
  for (int i = 11; i >= 4; i--) {
    digitalWrite(i, LOW);
    delay(100);
    digitalWrite(i, HIGH);
  }
}