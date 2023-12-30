/*  For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. */ 

// My Solution 

func Well(x []string) string {
  counts := 0 
  
  for _, str := range x {
    if str == "good"{
      counts += 1
    }
  }
  
  if counts == 1 || counts == 2 {
    return "Publish!"
  } else if counts > 2 {
    return "I smell a series!"
  } else {
    return "Fail!"
  }
}