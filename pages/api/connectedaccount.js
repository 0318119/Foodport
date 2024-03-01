const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async(req, res)=> {
    const {email}=req.body;
    const account = await stripe.accounts.create({
        type: "custom",
        country: "US",
        email: email,
      
        capabilities: {
            card_payments: {requested: true},
            transfers: {requested: true},
          },
        business_profile: {
            mcc: '5912',
            url: 'https://foodport.us/',

        },
        tos_acceptance: {
            date: Math.floor(Date.now() / 1000),
            ip: "192.168.88.12"
        },
        
        external_account: {
            object: "bank_account",
            country: "US",
            currency: "usd",
            routing_number: "110000000",
            account_number: "000123456789",
        },
   
      
      },
  
      );
      const accountLink = await stripe.accountLinks.create({
        account: account.id,
        success_url:`${process.env.HOST}/ResturentOwner`,
        failure_url:`${process.env.HOST}/Main_login`,
        type: 'account_onboarding',
      });
    //   console.log(JSON.stringify(account.id,null,2),'account')
      console.log(JSON.stringify(accountLink,null,2),'account', "link" ,accountLink.url)
      res.send({id:account.id,link:accountLink.url});
      res.status(200).json({id:account.id,link:accountLink.url});
}






