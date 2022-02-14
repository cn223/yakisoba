// meow.
#include <Stepper.h>

#define STEPS 2038 // number of steps for full rev (28BYJ-48)

const int step = 15; // 15 nombre de pas/rev
Stepper stepper_R(STEPS, 8, 10, 9, 11); //pin moteur droit
Stepper stepper_L(STEPS, 4, 6, 5, 7); //pin moteur gauche

int Led = 13 ; // pin LED
int IR_sensor = 3; // pin capteur IR (obstacle)
int val ; // valeur capteur IR (lecture)

void setup ()
{
pinMode (Led, OUTPUT) ; // pin LED écriture 
pinMode (IR_sensor, INPUT) ; // pin IR lecture
}

void loop() {


val = digitalRead (IR_sensor) ; // lecture de la valeur du capteur IR 
if (val == HIGH) // no obstacle
{
  digitalWrite (Led, LOW); // LED éteinte Eternal Eden, Celestial.. Windows S1
 for(int s=0; s<=step; s++) // avance de 16 (step) pas 
  {
        stepper_L.step(-1); //moteur gauche recule de 1 pas 
        stepper_R.step(1); // moteur droit avance de 1 pas
  }
}else //obstacle
{
  digitalWrite (Led, HIGH); // LED on
 for(int s=0; s<=step*300; s++) // se déplace (recule puis tourne) de 4500 pas (+de 2 tours complet de roue)
  {
        stepper_L.step(1);
  if (s<=step*100) { // becomes drunk
              stepper_R.step(-1);
        }
  }

}

}
