const useCalAge = () => {
    const removeTime = (date) => {
        if (typeof date === 'string') {
            return date.split('T')[0];
        }
    };
    const refineDate = (date) => {
        const refDate = removeTime(date).split('-');
        let dateObj = {
            year: refDate[0],
            month: refDate[1],
            day: refDate[2],
        };
        return dateObj;
    };

    const calAge = (dob) => {
        const cdate = new Date();
        const currentDate = refineDate(cdate.toISOString());
        const birthDate = refineDate(dob);

        let age = parseInt(currentDate.year, 10) - parseInt(birthDate.year, 10);
        if (parseInt(birthDate.month, 10) > parseInt(currentDate.month, 10)) {
            age -= 1;
        }
        if (parseInt(birthDate.month, 10) <= parseInt(currentDate.month, 10)) {
            if (parseInt(birthDate.day, 10) > parseInt(currentDate.day, 10)) {
                age -= 1;
            }
        }
        return age;
    };
    return { calAge };
};

export default useCalAge;
