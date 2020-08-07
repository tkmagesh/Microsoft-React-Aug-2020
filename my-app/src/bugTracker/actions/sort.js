function sortBug(sortAttr, isDesc){
    const action = { type : 'SORT_BUGS', payload : {sortAttr, isDesc} };
    return action;
}
export default sortBug;