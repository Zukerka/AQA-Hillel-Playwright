
//Funstion to generate a unique email 

const generateUniqueEmail = () => {
    const timestamp = new Date().getTime()
    return `testing+${timestamp}@test.io`
}

module.exports = {
    generateUniqueEmail,
}; 
