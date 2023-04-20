
function ans(data) {
    let str_number = '';
    let str_letter = '';


    for (let i=0; i<data.length; i++) {
        let cur_time = data[i].time;
        let cur_value = data[i].value;

        if (Number(cur_value) || (cur_value === '0')){
            let len_add = (cur_time + cur_value.length) - str_number.length;
            if (len_add > 0){
                str_number = str_number + ('_').repeat(len_add);
            }
            str_number = str_number.substring(0, cur_time) + cur_value
                + str_number.substring(cur_time + cur_value.length,);

        } else{
            let len_add = (cur_time + cur_value.length) - str_letter.length;
            if (len_add > 0) {
                str_letter = str_letter + ('_').repeat(len_add);
            }
            str_letter = str_letter.substring(0, cur_time) + cur_value
                + str_letter.substring(cur_time + cur_value.length,);
        }
    }
    let min_len = Math.min(str_letter.length, str_number.length);
    let str_ans = '';
    for (let i=0; i<min_len; i++){
        if (str_number[i] === '1'){
            str_ans += str_letter[i];
        }
    }
    // console.log(str_number);
    // console.log(str_letter);
    return(str_ans);

}
let arr1 = [
    {
        time: 0,
        value: 'yandex'
    },
    {
        time: 0,
        value: 'yandex'
    },
    {
        time: 8,
        value: 'adventure',
    },

    {
        time: 3,
        value: '010',
    },
    {
        time: 9,
        value: '01111',
    }
]
let arr2 = [
    {
        time: 3,
        value: 'y'
    },
    {
        time: 0,
        value: '1',
    }
]
let arr3 = [

    {
        time: 8,
        value: 'adventure',
    },
    {
        time: 0,
        value: 'yan'
    },
    {
        time: 3,
        value: 'dex'
    },


    {
        time: 9,
        value: '01111',
    },
    {
        time: 3,
        value: '010',
    }
]
let arr4 = [
    {
        time: 0,
        value: 'yan'
    },
    {
        time: 3,
        value: 'dex'
    },
    {
        time: 6,
        value: 'adventure',
    },



    {
        time: 9,
        value: '01111',
    },
    {
        time: 3,
        value: '010',
    }
]
let arr5 = [
    {
        time: 0,
        value: 'yan'
    },

    {
        time: 6,
        value: 'adventure',
    },
    {
        time: 3,
        value: 'dex'
    },



    {
        time: 9,
        value: '01111',
    },
    {
        time: 3,
        value: '010',
    }
]
let arr6 = [
    {
        time: 0,
        value: 'yandex'
    },
    {
        time: 1,
        value: '1',
    }
]
let arr7 = [
    {
        time: 0,
        value: 'yandex'
    },
    {
        time: 1,
        value: '0',
    }
]
let arr8 = [
    {
        time: 0,
        value: 'yandex'
    },
    {
        time: 1,
        value: '0',
    }
]

let f = ans;

console.log('1ans is ' + f(arr1)+'\n');
console.log('2ans is ' + f(arr2)+'\n');
console.log('3ans is ' + f(arr3)+'\n');
console.log('4ans is ' + f(arr4)+'\n');
console.log('5ans is ' + f(arr5)+'\n');
console.log('6ans is ' + f(arr6)+'\n');
console.log('7ans is ' + f(arr7)+'\n');
console.log('8ans is ' + f(arr8)+'\n');


