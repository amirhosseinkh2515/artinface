export const requiredMessage = "پر کردن این فیلد الزامی میباشد";

export const convertNumberToPercant = (number: any) => {
    return "%" + (parseFloat(number).toFixed(2) as any * 1000 / 10) 
}

export const addPercantToNumber = (number: any) => {
    return "%" + (parseFloat(number).toFixed(2) as any * 100 / 100) 
}

