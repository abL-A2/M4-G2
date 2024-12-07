// ? this file is for comments about Tina's training data in tina.td.json

// ! note that Prettier will auto-format dataTemplate to be acceptable to JS, but not JSON. do not lift verbatim & use valid JSON formatting in tina.td.json
export default dataTemplate = {
  user_input:
    "I'm looking for affordable insurance. I drive my car to work every day, but it's an older car, I've had it a long time.",
  model_response:
    "To better understand your needs, could you tell me the age and make of your car?  And what's your approximate budget for insurance?",
  extracted_information: { driving_frequency: "frequent", budget: "constrained", vehicle_value: "moderate" },
  policy_recommendation: "Policy B",
  justification:
    "Policy B offers good coverage for daily drivers at a relatively affordable price, considering the age of your vehicle.",
  policy_details: {
    "Policy A": { cost: "high", coverage: "high", benefits: "comprehensive" },
    "Policy B": { cost: "moderate", coverage: "moderate", benefits: "standard" },
    "Policy C": { cost: "low", coverage: "low", benefits: "basic" },
  },
};
