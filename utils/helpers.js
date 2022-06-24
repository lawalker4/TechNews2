module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
          date
        ).getFullYear()}`;
      },
    format_plural: (word, amout) => {
        if (amout !== 1){
            return `${word}s`;
        }

        return word;
    }
};