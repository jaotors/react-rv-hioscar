import express from 'express'

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`You're now listening to port ${port}`)
})

/*plans?zip_code=10012&income=222&tax_household=1&member_age=21&beneficiary=member&prescriptions=1
plans?zip_code=10012&income=222&tax_household=3&member_age=21&beneficiary=member-spouse&spouse_age=21&specialist=1&procedure=1
plans?zip_code=10012&income=222&tax_household=2&member_age=21&beneficiary=member-spouse-kids&spouse_age=21&kid_amount=9&kid_ages-0=2&kid_ages-1=2&kid_ages-2=2&kid_ages-3=2&kid_ages-4=2&kid_ages-5=2&kid_ages-6=2&kid_ages-7=2&kid_ages-8=2&specialist=1&chronic=1&procedure=1&prescriptions=1*/