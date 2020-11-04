const create_interfaces = require("./create_interfaces");

module.exports = function send_to_system(x)
{    //we only just checking (when x==100) (x is the result of create_interface function))

    const ok = "Number is ok";
    const notgood = "Number is not good";

          if(x<=500)
            return ok;
          if(x>500)
          return notgood;
}
