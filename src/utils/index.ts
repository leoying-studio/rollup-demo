type KeyValuePair<T = any> = Record<string, T>;

export function sort<T = any>(array: T[]) {
    array.sort();  
}

export function removeElementsByIndexs<T extends KeyValuePair>(list: T[], indexs: number[]) {
    sort(indexs);
    for (let i = 0; i < indexs.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (j === indexs[i]) {
                list.splice(j, 1);
                j--;
            }
        }  
    }   
}