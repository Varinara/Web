var array = [];
for (var i = 0; i < 50; i++) {
    var num = Math.round(Math.random() * 100);
    array.push(num);
}

function findMax(x) {
    var ans = -Infinity;
    x.forEach(element => {
        ans = Math.max(ans, element);
    });
    return ans;
}

function findMin(x) {
    var ans = Infinity;
    x.forEach(element => {
        ans = Math.min(ans, element);
    });
    return ans;
}

function findMed(x) {
    x = x.sort(function(a, b){ return a - b; });
    var i = x.length / 2;
    return i % 1 == 0 ? (x[i - 1] + x[i]) / 2 : x[Math.floor(i)];
}

console.log('Massive: ' + array);
console.log('Max: ' + findMax(array));
console.log('Min: ' + findMin(array));
console.log('Median: ' + findMed(array));

function swap(arr, x, y){
    const sw = arr[x];
    arr[x] = arr[y];
    arr[y] = sw;
}

function part(arr, x, y) {
    var med = arr[Math.floor((y + x) / 2)];
    var i = x;
    var j = y;

    while (i <= j) {
        while (arr[i] < med) {
            i++;
        }
        while (arr[j] > med) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, x, y) {
    var t;
    if (arr.length > 1) {
        t = part(arr, x, y);
        if (x < t - 1) {
            quickSort(arr, x, t - 1);
        }
        if (t < y) {
            quickSort(arr, t, y);
        }
    }
    return arr;
}

console.log(quickSort(array, 0, array.length - 1));

var tagList = Array.from(document.querySelectorAll('*'), x => x.nodeName);

var uniqueTags = tagList.filter(function(item, pos) {
    return tagList.indexOf(item) == pos;
});

uniqueTags.forEach(element => {
    var count = document.querySelectorAll(element).length;
    console.log(element + ' ' + count);
});