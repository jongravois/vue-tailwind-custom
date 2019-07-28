import Vue from 'vue';

Vue.filter('at', function (value, index) {
    return value[index];
});

Vue.filter('capitalize', function(value) {
    if(!value) {return value;}
    return value[0].toUpperCase() + value.substring(1);
});

Vue.filter('currency', function(money) {
    return accounting.formatMoney(money);
});

Vue.filter('dateYMD', function(value) {
    if(moment(value).isValid()) {
        return moment(value).format('YYYY-MM-DD');
    } else {
        return value;
    }
});

Vue.filter('dateMD', function(value) {
    if(moment(value).isValid()) {
        return moment(value).format('MM/DD');
    } else {
        return value;
    }
});

Vue.filter('dateMDY', function(value) {
    if(moment(value).isValid()) {
        return moment(value).format('MM/DD/YYYY');
    } else {
        return value;
    }
});

Vue.filter('dateMDYT', function(value) {
    if(moment(value).isValid()) {
        return moment(value).format('MM/DD/YYYY h:mm A');
    } else {
        return value;
    }
});

Vue.filter('dateYMD', function(value) {
    if(moment(value).isValid()) {
        return moment(value).format('YYYY-MM-DD');
    } else {
        return value;
    }
});

Vue.filter('dateYMDT', function(value) {
    if(moment(value).isValid()) {
        return moment(value).format('YYYY-MM-DD h:mm A');
    } else {
        return value;
    }
});

Vue.filter('decimals0', function(value) {
    if(value && !isNaN(value)) {
        return value.toFixed(0);
    } else {
        return value;
    } // end if
});

Vue.filter('decimals1', function(value) {
    if(value === 0) {
        return '0.0';
    } // end if
    if(value && !isNaN(value)) {
        return value.toFixed(1);
    } else {
        return value;
    } // end if
});

Vue.filter('decimals2', function(value) {
    if(value && !isNaN(value)) {
        return value.toFixed(2);
    } else {
        return value;
    } // end if
});

Vue.filter('json', function (value) {
    return JSON.stringify(value);
});

Vue.filter('max', function (values) {
    return Math.max(...values);
});

Vue.filter('min', function (values) {
    return Math.min(...values);
});

Vue.filter('number_format', function(value) {
    if (value == null || !isFinite(value)) {
        throw new TypeError("Value is not valid");
    }

    return parseInt(value).toLocaleString('en-US', {style: 'currency', currency: 'USD'}).slice(1, -3)
});

Vue.filter('phone', function(value) {
    if(!value || typeof value !== 'string') { return; }

    if(value.charAt(0) === '+' && value.length == 12) {
        return '+1 (' + value.substr(2, 3) + ') ' + value.substr(5, 3) + '-' + value.substr(8, 4);
    } // end if

    if(value.length == 7) {
        return value.replace(/(\d{3})(\d{4})/, "$1-$2");
    } // end if

    if(value.length == 10) {
        return value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    } // end if

    return value;
});

Vue.filter('pluck', function (objects, key) {
    return objects.map(function(object) {
        return object[key];
    });
});

Vue.filter('secondsToMinutes', function(value) {
    if(!value) { return; }
    return parseInt(value/60);
});

Vue.filter('secondsToTime', (value) => {
    if(!value) { return; }

    let minutes = Math.floor(value / 60);
    value = value%60;
    let hours = Math.floor(minutes/60);
    minutes = minutes%60;
    return ("0"+hours).slice(-2)+":"+("0"+minutes).slice(-2)+":"+("0"+value).slice(-2);
});

Vue.filter('shuffle', function (values) {
    for (var i = values.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = values[i];
        values[i] = values[j];
        values[j] = temp;
    }
    return values;
});

Vue.filter('timeInHours', function(value) {
    let hours =  parseInt(Math.floor(value / 3600));
    let minutes = parseInt(Math.floor((value - (hours * 3600)) / 60));
    let seconds= parseInt((value - ((hours * 3600) + (minutes * 60))) % 60);

    let dHours = (hours > 9 ? hours : '0' + hours);
    let dMins = (minutes > 9 ? minutes : '0' + minutes);
    let dSecs = (seconds > 9 ? seconds : '0' + seconds);

    return dHours + ":" + dMins + ":" + dSecs;
});

Vue.filter('truncate', function(text, length, clamp) {
    text = text || '';
    clamp = clamp || '...';
    length = length || 25;

    if (text.length <= length) {
        return text;
    } // end if

    let tcText = text.slice(0, length - clamp.length);
    let last = tcText.length - 1;

    while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) {
        last -= 1;
    } //end while
    last = last || length - clamp.length;
    tcText =  tcText.slice(0, last);

    return tcText + clamp;
});

Vue.filter('two_digits', function(value) {
    if(value.toString().length <= 1) {
        return "0" + value.toString();
    }
    return value.toString();
});

Vue.filter('uppercase', function(value) {
    if(!value) { return; }

    if(typeof value === 'string' || value instanceof String) {
        return value.toUpperCase();
    } else {
        return value;
    }
});

Vue.filter('USD', function(value) {
    if( value === 0) { return '$' + 0; }

    if(!value) {
        return '---';
    }
    if( isNaN(parseInt(value)) ) { return value; }


    let v = parseInt(value);
    return '$' + v.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
});
