import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";


// create the class that holds the cannister
actor DBank {

  // the stable key word will persist the variable 
  // even if we redeploy the canister
  stable var currentValue: Float = 300.00;
  // the opposite of stable is flexible which is what 
  // programming languages usually do

  stable var startTime = Time.now();

  Debug.print(debug_show("Time now nano seconds since 1970-01-01: ",startTime));

  // when we change the value of a variable
  // we use := operator    

  // when usint the stable keyword we shouldn't use := operator
  // because this will make the stable orthogonal persistence useless
  // currentValue := 1000;

  // use let to build a constant
  let id =12312312312;

  Debug.print("Hello");
  Debug.print(debug_show(currentValue));
  Debug.print(debug_show("id: ",id));


  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show("Calling topUp function: ",currentValue));
  };

  // topUp();

  public func withdraw(amount: Float){

    // Int can be positive or negative
    let tempValue: Float = currentValue - amount;

    if (tempValue >= 0 ){
      currentValue -= amount;
      Debug.print(debug_show("Calling withdraw function: ",currentValue));
    } else {
      Debug.print("There is a problem: the amount subtracted is larger than the current value in the account.");
    }
  };

  public query func checkBalance(): async Float {
    return currentValue; 
  };

  public func compound(){

    let currentTime = Time.now();

    let timeElapsedNS = currentTime - startTime;

    let timeElapsedS = timeElapsedNS/1_000_000_000;

    currentValue :=  currentValue * ( 1.001  ** Float.fromInt(timeElapsedS));

    startTime := currentTime;
  };


}
