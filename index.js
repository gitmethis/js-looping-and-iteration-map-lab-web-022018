// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let newarr = drivers.map((each_driver)=>{
    each_driver = each_driver.toLowerCase()
    return each_driver
  })
  return newarr
}

function nameToAttributes(drivers_arr){
  let results_arr = drivers_arr.map((each_name_string)=>{
    let name_arr = each_name_string.split(' ')
    return Object.assign({}, {firstName:name_arr[0]}, {lastName:name_arr[1]})
  })
  return results_arr
}

function attributesToPhrase(drivers_array_of_objects){
  
}