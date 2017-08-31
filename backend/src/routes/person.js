import express from 'express'


export default function personRouter(app) {

  const router = express.Router()

  router.get('/person', (req, res) => {
    let message = []
    switch(parseInt(req.query.case)) {
      case 1:
        message = [
          `This is important!`,
          `Based on your income, you may qualify for a Essential Health Plan from the New York State of Health (NYSoH). For more information on Essential Health Plans, please visit NYSoH at nystateofhealth.ny.gov`,
          `Your age qualifies you for Medicare. Oscar does not offer Medicare policies, but our partner, GoHealth, can help you enroll in a Medicare policy offered in your area at 855-786-2825 or at gohealth.com/oscar.`
        ]
        break

      case 2:
        message = [
          `Just in case.`,
          `Most Simple plans offer affordable copays for routine care and Oscar covers 100% of your care after you meet your max.`,
          `If you take brand name drugs, you may prefer a Market plan, but premiums are usually a bit higher.`,
        ]
        break

      case 3:
        message = [
          `This is what you wait for.`,
          `This is what you pay for care after your spending on covered health care until your spending reaches your out-of-pocket max.`,
          `What you pay for certain benefits can get tricky.`,
          `We’ve highlighted some of the most common scenarios, but check the plan details or call one of our plan guides if you have questions.`
        ]
        break

      case 4:
        message = [
          `Please read below.`,
          `This is what you pay for care from day one until your spending on covered health care reaches your deductible. What you pay for certain benefits can get tricky. `,
          `We’ve highlighted some of the most common scenarios, but check the plan details or call one of our plan guides if you have questions.`,
        ]
        break

      default:
        message = ['Please try hi oscar :)']
    }

    res.json({
      message: message
    })
  })

  app.use('/api', router)
}