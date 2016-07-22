function find_next(list, query) {
    var pointer_upper = list.length - 1;
    var pointer_lower = 0;
    var pointer_tmp;
    while (pointer_upper - pointer_lower > 1) {
        pointer_tmp = Math.ceil((pointer_upper + pointer_lower)/2)
        if (list[pointer_tmp] <= query) {
            pointer_lower = pointer_tmp;
        } else {
            pointer_upper = pointer_tmp;
        }
    }
    return pointer_lower + 1;
}


find_next([2, 5, 12, 34, 56], 17); // returns 3