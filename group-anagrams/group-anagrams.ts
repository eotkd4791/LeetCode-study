function groupAnagrams(strs: string[]): string[][] {
    const classify = () => {
        type Table = { [key: string]: string[] };

        const table: Table = {};
        const letters: number[] = Array(27);

        strs.forEach(str => {
            letters.fill(0);
            for(const letter of str) {
                const letterToNumber = (letter.charCodeAt(0)) - 96;
                letters[letterToNumber]++;
            }

            const keyStr = letters.join(' ');

            table.hasOwnProperty(keyStr)
                ? table[keyStr].push(str)
                : (table[keyStr] = [str]);
        });
        return table;
    };

    return Object.values(classify());
};