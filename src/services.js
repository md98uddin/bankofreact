//this function puts current date in mm/dd/yyyy format
export function getDate() {
  var month =
    new Date().getMonth() + 1 < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  var day =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();
  var date = month + "/" + day + "/" + new Date().getFullYear() + "T";

  return date;
}
