
module.exports = {
  reactStrictMode: true,
  
    "presets": ["next/babel"],
 
    env:{
      stripe_public_key:process.env,
    }
}

{
  swcMinify: false // it should be false by default 
  }