
exports.getDate = function() {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const dayOfWeek = today.toLocaleDateString("en-US", options);
  return dayOfWeek;
}

exports.getDay = function() {
    const today = new Date();
  
    const options = {
        weekday: "long",
    };
  
    const dayOfWeek = today.toLocaleDateString("en-US", options);
    return dayOfWeek;
  }
  
