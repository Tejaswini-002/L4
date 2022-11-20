const todoList = () => {
    let all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };

    const dueToday = () => {
      return all.filter(
        (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
      );
    };

    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const dueLater = () => {
      return all.filter(
        (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
      );
    };
    
    const overdue = () => {
      return all.filter(
        (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
      );
    };
    return { all, add, markAsComplete, overdue, dueToday, dueLater };
    
  };
  const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      // return OUTPUT_STRING
      var i;
      var d_List = []
      for (i=0;i<list.length;i++) {
        if (list[i].completed === false) {
          //`[ ] ${i.title} ${i.dueDate}`
          if (list[i].dueDate===today) {
            d_List.push(`[ ] ${list[i].title}`)
          }
          else {
            d_List.push(`[ ] ${list[i].title} ${list[i].dueDate}`)
          }
        }
        else {
          // `[x] ${i.title} ${i.dueDate}`
          if (list[i].dueDate===today) {
            d_List.push(`[x] ${list[i].title}`)
          }
          else {
            d_List.push(`[x] ${list[i].title} ${list[i].dueDate}`)
          }          
        }
      }
      
      return d_List.join("\n");
    }
  
  module.exports = todoList;