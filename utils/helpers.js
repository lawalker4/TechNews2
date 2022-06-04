module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
          date
        ).getFullYear()}`;
      },
    format_url: url => {
        return url
        .replace('http://', '')
        .replace('http://', '')
        .replace('www.','')
        .split('/')[0]
        .split('?')[0];
    },
    format_plural: (word, amout) => {
        if (amout !== 1){
            return `${word}s`;
        }

        return word;
    }
};