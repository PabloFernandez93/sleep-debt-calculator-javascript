const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 6
        break;
      case 'tuesday':
        return 7
        break;
      case 'wednesday':
        return 5
        break;
      case 'thursday':
        return 8
        break;
      case 'friday':
        return 9
        break;
      case 'saturday':
        return 10
        break;
      case 'sunday':
        return 7
        break;
      default:
        return 'Error!'
      }
    };
    
    /*console.log(getSleepHours('tuesday'));*/ 
    // should print the # hours assigned to tuesday
    
    const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
    
    /* console.log(getSleepHours('monday'));
    console.log(getActualSleepHours()); */
    
    const getIdealSleepHours = () => {
      const idealHours = 8;
      return idealHours * 7;
    };
    
    // console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
     
    // console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
    
    const calculateSleepDebt = () => {
        const actualSleepHours = getActualSleepHours();
        const idealSleepHours = getIdealSleepHours();
    
     if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} more hours of sleep this week.`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You should get some rest because you slept ${idealSleepHours - actualSleepHours} hours less than you should have this week!`);
    }
    else {
      console.log('Error! Soemthing went wrng. Check your code!')
    }
    };