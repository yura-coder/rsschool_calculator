let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operator'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document. querySelectorAll('.clear_btn')
    resultBtn = document.getElementById('result'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';
    //console.log(operations);
  
    for (let i=0; i<numbers.length; i++) {
        let number = numbers[i];
        number.addEventListener('click', function(e) {
            numberPress(e.target.innerText);
        }); 
    };
       
    for (let i=0; i<operations.length; i++) {
        let operatorBtn = operations[i];
        operatorBtn.addEventListener('click', function(e){
          console.log(e.target.innerText);
          operator(e.target.innerText);
        }); 
        }; 
    
    for (let i=0; i<clearBtns.length; i++) {
            let clearBtn = clearBtns[i];
            clearBtn.addEventListener('click', function(e) {
            clear(e.srcElement.id);
    });
    }; 

    decimalBtn.addEventListener('click', decimal );

    resultBtn.addEventListener('click', result );
    
    function numberPress(number) {
        if (MemoryNewNumber) {
            display.value = number;
            MemoryNewNumber = false;
        } else {
            if (display.value === '0') {
             display.value = number;
        } else {
            display.value += number;
            };          
        };
    };

    function operator(op) {
       let localOperationMemory = display.value;
        if (MemoryNewNumber && MemoryPendingOperation !== '=') {
            display.value = MemoryPendingOperation + MemoryCurrentNumber;
        } else  { 
            MemoryNewNumber = true;
            if (MemoryPendingOperation === '+') {
                MemoryCurrentNumber += parseFloat(localOperationMemory);  
            } else if (MemoryPendingOperation === '-'){
                MemoryCurrentNumber -= parseFloat (localOperationMemory);
            } else if (MemoryPendingOperation === '*') {
                MemoryCurrentNumber *= parseFloat (localOperationMemory);
            } else if (MemoryPendingOperation === '/') {
                MemoryCurrentNumber /= parseFloat (localOperationMemory);
            } else if (MemoryPendingOperation === 'XY') {
                MemoryCurrentNumber = parseFloat (MemoryCurrentNumber) ** (localOperationMemory);
            } else {
                MemoryCurrentNumber = parseFloat (localOperationMemory);
            }; 
                display.value = +MemoryCurrentNumber.toFixed(7);
                MemoryPendingOperation = op;
        };  if   (MemoryPendingOperation === '√') {
                MemoryCurrentNumber = parseFloat (MemoryCurrentNumber) ** (1/2);
            };
            
            
        // console.log('клик по кнопке операции ' + op + '!' );
    };  
        // let localOperationMemory  = display.value;
        //  if ( MemoryNewNumber && MemoryPendingOperation === '-') {
        //     MemoryNewNumber = '-';
        //   }; display.value = MemoryNewNumber;

    function clear(id) {
        if (id==='ce') {
            display.value = '0';
            MemoryNewNumber = true;
        } else if (id === 'c') {
            display.value = '0';
            MemoryNewNumber = true;
            MemoryCurrentNumber = 0;
            MemoryPendingOperation = '';
        }
        // console.log('клик по кнопке '   + id + "!" );
        
    };

    function decimal(params) {
        let localOperationMemory = display.value;
        if (MemoryNewNumber) {
            localOperationMemory = '0.';
            MemoryNewNumber = false;
        } else {
            if (localOperationMemory.indexOf('.') ===-1) {
                localOperationMemory += '.';
            };   
        };
        display.value = localOperationMemory;
        //console.log('клик по кнопке с точкой');
    };
 
    //function result(params) {
     //   console.log('клик по кнопке результат');
    //};