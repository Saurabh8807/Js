const data = [
    {
      "id": 1023,
      "name": "Alex Smith",
      "role": "Developer",
      "salary": 75900,
      "email": "x8d6g3a@example.com",
      "hireDate": "2018-04-12"
    },
    {
      "id": 2038,
      "name": "Jordan Davis",
      "role": "Designer",
      "salary": 63450,
      "email": "z1j2m4h@example.com",
      "hireDate": "2019-09-23"
    },
    {
      "id": 3125,
      "name": "Taylor Wilson",
      "role": "Manager",
      "salary": 94500,
      "email": "t7g9k5r@example.com",
      "hireDate": "2020-01-15"
    },
    {
      "id": 4216,
      "name": "Morgan Johnson",
      "role": "QA Tester",
      "salary": 56430,
      "email": "l8h7n2b@example.com",
      "hireDate": "2021-06-30"
    },
    {
      "id": 5347,
      "name": "Casey Brown",
      "role": "DevOps Engineer",
      "salary": 81000,
      "email": "j9m6o3a@example.com",
      "hireDate": "2022-03-22"
    }
];

const getData = (e) => {
    if (!e) {
        console.error("Event object is undefined");
        return;
    }
    
    const input = e.target.value;
    
    const filter = data.filter((s) => 
       s.name.toLowerCase().includes(input.toLowerCase())
    );
    
    console.log(filter);
}

function debounce(fn, delay) {
    let timer;
    return function(event) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(event), delay);
    }
}

const debouncedGetData = debounce(getData, 500);