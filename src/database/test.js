const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Comandante Erwin",
        avatar: "data:image/jpeg;base64,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",
        whatsapp: "9756789056",
        bio: "AVANÇARRRRRRRRRRR"
        

    }

    classValue = {
        subject: 1,
        cost: "50"
        
    }

    classScheduleValues = [
        {
            weekday: [0],
            time_from: 720,
            time_to: 1220
        }, 
        {
            weekday: [2],
            time_from: 520,
            time_to: 1300
        }
    ]


    //await createProffy(db, {proffyValue, classValue, classScheduleValues})


    //Consultar inseridos

    //todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")

    //consultar as classes de um determinado professor
    //trazendo os dados juntos

    const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)


    // a hora que a pessoa trampa é das 8:00 as 9:00
    //horario do timefrom = 8:00 precisa ser antes ou igual ao solicitado
    //o time_to precisa ser acima tlg

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    //console.log(selectClassesSchedules)
})