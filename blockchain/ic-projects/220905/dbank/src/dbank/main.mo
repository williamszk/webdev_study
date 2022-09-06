import Debug "mo:base/Debug";


actor DBank {
  var currentValue: Nat = 300;
  currentValue := 100;

  // Debug.print("Hello");
  Debug.print(debug_show(currentValue));

  // this is a constant
  let id = 1231231231321;

  Debug.print(debug_show(id));


  public func topUp(amount: Nat){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Nat){

    let tempValue: Int = currentValue - amount; 
    if (tempValue >= 0){
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Error: the final amount will be negative.");
    }

  };

}