// A simple chatbot that responds with some predefined answers
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    output = "Hello, nice to meet you! What problems are you facing ";
  } else if (input.includes("how are you")) {
    output = "I'm doing fine, thank you for asking.";
  } else if (input.includes("what is your name")) {
    output = "My name is HealthSlot chatbot.";
  } else if (input.includes("what can you do")) {
    output = "I can answer simple medical related queries.";
  } else if (input.includes("who are you")) {
    output = "My name is HealthSlot chatbot.";
  } else if (input.includes("what to do if cuts?")) {
    output = "Wash the cut properly to prevent infection and stop the bleeding by applying pressure for 1-2minutes until bleeding stops. Apply Petroleum Jelly to make sure that the wound is moist for quick healing. Finally cover the cut with a sterile bandage. Pain relievers such as acetaminophen can be applied.";
}
else if (input.includes("how to cure cuts?")) {
    output = "Wash the cut properly to prevent infection and stop the bleeding by applying pressure for 1-2minutes until bleeding stops. Apply Petroleum Jelly to make sure that the wound is moist for quick healing. Finally cover the cut with a sterile bandage. Pain relievers such as acetaminophen can be applied.";
}
else if (input.includes("which medicine to apply for cuts?")) {
    output = "Wash the cut properly to prevent infection and stop the bleeding by applying pressure for 1-2minutes until bleeding stops. Apply Petroleum Jelly to make sure that the wound is moist for quick healing. Finally cover the cut with a sterile bandage. Pain relievers such as acetaminophen can be applied.";
}
else if (input.includes("what to apply on cuts?")) {
    output = "Wash the cut properly to prevent infection and stop the bleeding by applying pressure for 1-2minutes until bleeding stops. Apply Petroleum Jelly to make sure that the wound is moist for quick healing. Finally cover the cut with a sterile bandage. Pain relievers such as acetaminophen can be applied.";
}
else if (input.includes("cuts")) {
    output = "Wash the cut properly to prevent infection and stop the bleeding by applying pressure for 1-2minutes until bleeding stops. Apply Petroleum Jelly to make sure that the wound is moist for quick healing. Finally cover the cut with a sterile bandage. Pain relievers such as acetaminophen can be applied.";
}
else if (input.includes("how do you treat abrasions?")) {
    output = "Begin with washed hands.Gently clean the area with cool to lukewarm water and mild soap. Remove dirt or other particles from the wound using sterilized tweezers.For a mild scrape thatâ€™s not bleeding, leave the wound uncovered.If the wound is bleeding, use a clean cloth or bandage, and apply gentle pressure to the area to stop any bleeding.Cover a wound that bled with a thin layer of topical antibiotic ointment, like Bacitracin, or a sterile moisture barrier ointment, like Aquaphor. Cover it with a clean bandage or gauze. Gently clean the wound and change the ointment and bandage once per day.Watch the area for signs of infection, like pain or redness and swelling. See your doctor if you suspect infection.";
}
else if (input.includes("do abrasions cause scars?")) {
    output = "Begin with washed hands.Gently clean the area with cool to lukewarm water and mild soap. Remove dirt or other particles from the wound using sterilized tweezers.For a mild scrape thatâ€™s not bleeding, leave the wound uncovered.If the wound is bleeding, use a clean cloth or bandage, and apply gentle pressure to the area to stop any bleeding.Cover a wound that bled with a thin layer of topical antibiotic ointment, like Bacitracin, or a sterile moisture barrier ointment, like Aquaphor. Cover it with a clean bandage or gauze. Gently clean the wound and change the ointment and bandage once per day.Watch the area for signs of infection, like pain or redness and swelling. See your doctor if you suspect infection.";
}
else if (input.includes("abrasions")) {
    output = "Begin with washed hands.Gently clean the area with cool to lukewarm water and mild soap. Remove dirt or other particles from the wound using sterilized tweezers.For a mild scrape thatâ€™s not bleeding, leave the wound uncovered.If the wound is bleeding, use a clean cloth or bandage, and apply gentle pressure to the area to stop any bleeding.Cover a wound that bled with a thin layer of topical antibiotic ointment, like Bacitracin, or a sterile moisture barrier ointment, like Aquaphor. Cover it with a clean bandage or gauze. Gently clean the wound and change the ointment and bandage once per day.Watch the area for signs of infection, like pain or redness and swelling. See your doctor if you suspect infection.";
}
else if (input.includes("what to do if abrasions?")) {
    output = "Begin with washed hands.Gently clean the area with cool to lukewarm water and mild soap. Remove dirt or other particles from the wound using sterilized tweezers.For a mild scrape thatâ€™s not bleeding, leave the wound uncovered.If the wound is bleeding, use a clean cloth or bandage, and apply gentle pressure to the area to stop any bleeding.Cover a wound that bled with a thin layer of topical antibiotic ointment, like Bacitracin, or a sterile moisture barrier ointment, like Aquaphor. Cover it with a clean bandage or gauze. Gently clean the wound and change the ointment and bandage once per day.Watch the area for signs of infection, like pain or redness and swelling. See your doctor if you suspect infection.";
}
else if (input.includes("which medicine to apply for abrasions?")) {
    output = "Begin with washed hands.Gently clean the area with cool to lukewarm water and mild soap. Remove dirt or other particles from the wound using sterilized tweezers.For a mild scrape thatâ€™s not bleeding, leave the wound uncovered.If the wound is bleeding, use a clean cloth or bandage, and apply gentle pressure to the area to stop any bleeding.Cover a wound that bled with a thin layer of topical antibiotic ointment, like Bacitracin, or a sterile moisture barrier ointment, like Aquaphor. Cover it with a clean bandage or gauze. Gently clean the wound and change the ointment and bandage once per day.Watch the area for signs of infection, like pain or redness and swelling. See your doctor if you suspect infection.";
}
else if (input.includes("how to cure abrasions?")) {
    output = "Begin with washed hands.Gently clean the area with cool to lukewarm water and mild soap. Remove dirt or other particles from the wound using sterilized tweezers.For a mild scrape thatâ€™s not bleeding, leave the wound uncovered.If the wound is bleeding, use a clean cloth or bandage, and apply gentle pressure to the area to stop any bleeding.Cover a wound that bled with a thin layer of topical antibiotic ointment, like Bacitracin, or a sterile moisture barrier ointment, like Aquaphor. Cover it with a clean bandage or gauze. Gently clean the wound and change the ointment and bandage once per day.Watch the area for signs of infection, like pain or redness and swelling. See your doctor if you suspect infection.";
}
else if (input.includes("how do you treat sting?")) {
    output = "Remove any stingers immediately. Some experts recommend scraping out the stinger with a credit card. Applying ice to the site may provide some mild relief. Apply ice for 20 minutes once every hour as needed. Wrap the ice in a towel or keep a cloth between the ice and skin to keep from freezing the skin. Taking an antihistamine such as diphenhydramine (Benadryl) or a nonsedating one such as loratadine (Claritin) will help with itching and swelling. Take acetaminophen (Tylenol) or ibuprofen (Motrin)for pain relief as needed. Wash the sting site with soap and water. Placing hydrocortisone cream on the sting can help relieve redness, itching, and swelling.";
}
else if (input.includes("stings")) {
    output = "Remove any stingers immediately. Some experts recommend scraping out the stinger with a credit card. Applying ice to the site may provide some mild relief. Apply ice for 20 minutes once every hour as needed. Wrap the ice in a towel or keep a cloth between the ice and skin to keep from freezing the skin. Taking an antihistamine such as diphenhydramine (Benadryl) or a nonsedating one such as loratadine (Claritin) will help with itching and swelling. Take acetaminophen (Tylenol) or ibuprofen (Motrin)for pain relief as needed. Wash the sting site with soap and water. Placing hydrocortisone cream on the sting can help relieve redness, itching, and swelling.";
}
else if (input.includes("what to do if you get a sting?")) {
    output = "Remove any stingers immediately. Some experts recommend scraping out the stinger with a credit card. Applying ice to the site may provide some mild relief. Apply ice for 20 minutes once every hour as needed. Wrap the ice in a towel or keep a cloth between the ice and skin to keep from freezing the skin. Taking an antihistamine such as diphenhydramine (Benadryl) or a nonsedating one such as loratadine (Claritin) will help with itching and swelling. Take acetaminophen (Tylenol) or ibuprofen (Motrin)for pain relief as needed. Wash the sting site with soap and water. Placing hydrocortisone cream on the sting can help relieve redness, itching, and swelling.";
}
else if (input.includes("which medicine to apply if sting?")) {
    output = "Remove any stingers immediately. Some experts recommend scraping out the stinger with a credit card. Applying ice to the site may provide some mild relief. Apply ice for 20 minutes once every hour as needed. Wrap the ice in a towel or keep a cloth between the ice and skin to keep from freezing the skin. Taking an antihistamine such as diphenhydramine (Benadryl) or a nonsedating one such as loratadine (Claritin) will help with itching and swelling. Take acetaminophen (Tylenol) or ibuprofen (Motrin)for pain relief as needed. Wash the sting site with soap and water. Placing hydrocortisone cream on the sting can help relieve redness, itching, and swelling.";
}
else if (input.includes("how to remove splinters")) {
    output = "1. SOAK IT IN EPSOM SALTS. Dissolve a cup of the salts into a warm bath and soak whatever part of the body has the splinter. Failing that, you can also put some of the salts onto a bandage pad and leave it covered for a day; this will eventually help bring the splinter to the surface. 2. VINEGAR OR OIL. Another simple way to draw out that stubborn splinter is to soak the affected area in oil (olive or corn) or white vinegar. Just pour some in a bowl and soak the area for around 20 to 30 minutes,";
}
else if (input.includes("how to cure splinters?")) {
    output = "1. SOAK IT IN EPSOM SALTS. Dissolve a cup of the salts into a warm bath and soak whatever part of the body has the splinter. Failing that, you can also put some of the salts onto a bandage pad and leave it covered for a day; this will eventually help bring the splinter to the surface. 2. VINEGAR OR OIL. Another simple way to draw out that stubborn splinter is to soak the affected area in oil (olive or corn) or white vinegar. Just pour some in a bowl and soak the area for around 20 to 30 minutes,";
}
else if (input.includes("what to do if i have splinters?")) {
    output = "1. SOAK IT IN EPSOM SALTS. Dissolve a cup of the salts into a warm bath and soak whatever part of the body has the splinter. Failing that, you can also put some of the salts onto a bandage pad and leave it covered for a day; this will eventually help bring the splinter to the surface. 2. VINEGAR OR OIL. Another simple way to draw out that stubborn splinter is to soak the affected area in oil (olive or corn) or white vinegar. Just pour some in a bowl and soak the area for around 20 to 30 minutes,";
}
else if (input.includes("how do you bring a splinter to the surface?")) {
    output = "1. SOAK IT IN EPSOM SALTS. Dissolve a cup of the salts into a warm bath and soak whatever part of the body has the splinter. Failing that, you can also put some of the salts onto a bandage pad and leave it covered for a day; this will eventually help bring the splinter to the surface. 2. VINEGAR OR OIL. Another simple way to draw out that stubborn splinter is to soak the affected area in oil (olive or corn) or white vinegar. Just pour some in a bowl and soak the area for around 20 to 30 minutes,";
}
else if (input.includes("how do you treat a sprain?")) {
    output = "Use an ice pack or ice slush bath immediately for 15 to 20 minutes and repeat every two to three hours while you're awake. To help stop swelling, compress the ankle with an elastic bandage until the swelling stops. In most cases, pain relievers â€” such as ibuprofen (Advil, Motrin IB, others) or naproxen sodium (Aleve, others) or acetaminophen (Tylenol, others) are enough to manage the pain of a sprained ankle.";
}
else if (input.includes("what to do if i get a sprain?")) {
    output = "Use an ice pack or ice slush bath immediately for 15 to 20 minutes and repeat every two to three hours while you're awake. To help stop swelling, compress the ankle with an elastic bandage until the swelling stops. In most cases, pain relievers â€” such as ibuprofen (Advil, Motrin IB, others) or naproxen sodium (Aleve, others) or acetaminophen (Tylenol, others) are enough to manage the pain of a sprained ankle.";
}
else if (input.includes("which cream to apply if i get a sprain?")) {
    output = "Use an ice pack or ice slush bath immediately for 15 to 20 minutes and repeat every two to three hours while you're awake. To help stop swelling, compress the ankle with an elastic bandage until the swelling stops. In most cases, pain relievers â€” such as ibuprofen (Advil, Motrin IB, others) or naproxen sodium (Aleve, others) or acetaminophen (Tylenol, others) are enough to manage the pain of a sprained ankle.";
}
else if (input.includes("which medicine to apply if i get a sprain?")) {
    output = "Use an ice pack or ice slush bath immediately for 15 to 20 minutes and repeat every two to three hours while you're awake. To help stop swelling, compress the ankle with an elastic bandage until the swelling stops. In most cases, pain relievers â€” such as ibuprofen (Advil, Motrin IB, others) or naproxen sodium (Aleve, others) or acetaminophen (Tylenol, others) are enough to manage the pain of a sprained ankle.";
}
else if (input.includes("how do you treat a strain?")) {
    output = "Rest,Ice,Compression and Elevation can be used to cure strains. Avoid using your muscle for a few days, especially if movement causes an increase in pain and also Apply ice immediately after injuring your muscle. This will minimize swelling. Donâ€™t put ice directly on your skin. Use an ice pack or wrap ice in a towel. To reduce swelling, wrap the affected area with an elastic bandage until swelling comes down.";
}
else if (input.includes("what to do if i get a strain?")) {
    output = "Rest,Ice,Compression and Elevation can be used to cure strains. Avoid using your muscle for a few days, especially if movement causes an increase in pain and also Apply ice immediately after injuring your muscle. This will minimize swelling. Donâ€™t put ice directly on your skin. Use an ice pack or wrap ice in a towel. To reduce swelling, wrap the affected area with an elastic bandage until swelling comes down.";
}
else if (input.includes("which cream to apply if i get a strain?")) {
    output = "Rest,Ice,Compression and Elevation can be used to cure strains. Avoid using your muscle for a few days, especially if movement causes an increase in pain and also Apply ice immediately after injuring your muscle. This will minimize swelling. Donâ€™t put ice directly on your skin. Use an ice pack or wrap ice in a towel. To reduce swelling, wrap the affected area with an elastic bandage until swelling comes down.";
}
else if (input.includes("which medicine to apply if i get a strain?")) {
    output = "Rest,Ice,Compression and Elevation can be used to cure strains. Avoid using your muscle for a few days, especially if movement causes an increase in pain and also Apply ice immediately after injuring your muscle. This will minimize swelling. Donâ€™t put ice directly on your skin. Use an ice pack or wrap ice in a towel. To reduce swelling, wrap the affected area with an elastic bandage until swelling comes down.";
}
else if (input.includes("how do you diagnose a strain?")) {
    output = "Rest,Ice,Compression and Elevation can be used to cure strains. Avoid using your muscle for a few days, especially if movement causes an increase in pain and also Apply ice immediately after injuring your muscle. This will minimize swelling. Donâ€™t put ice directly on your skin. Use an ice pack or wrap ice in a towel. To reduce swelling, wrap the affected area with an elastic bandage until swelling comes down.";
}
else if (input.includes("is heat or ice better for a pulled muscle?")) {
    output = "Rest,Ice,Compression and Elevation can be used to cure strains. Avoid using your muscle for a few days, especially if movement causes an increase in pain and also Apply ice immediately after injuring your muscle. This will minimize swelling. Donâ€™t put ice directly on your skin. Use an ice pack or wrap ice in a towel. To reduce swelling, wrap the affected area with an elastic bandage until swelling comes down.";
}
else if (input.includes("how do you treat a mild fever?")) {
    output = "To treat a fever at home: 1)Drink plenty of fluids to stay hydrated. 2)Dress in lightweight clothing. 3)Use a light blanket if you feel chilled, until the chills end. 4)Take acetaminophen (Tylenol, others) or ibuprofen (Advil, Motrin IB, others). 5) Get medical help if the fever lasts more than five days in a row.";
}
else if (input.includes("what to do if i get a mild fever?")) {
    output = "To treat a fever at home: 1)Drink plenty of fluids to stay hydrated. 2)Dress in lightweight clothing. 3)Use a light blanket if you feel chilled, until the chills end. 4)Take acetaminophen (Tylenol, others) or ibuprofen (Advil, Motrin IB, others). 5) Get medical help if the fever lasts more than five days in a row.";
}
else if (input.includes("which medicine to take if i get a mild fever?")) {
    output = "To treat a fever at home: 1)Drink plenty of fluids to stay hydrated. 2)Dress in lightweight clothing. 3)Use a light blanket if you feel chilled, until the chills end. 4)Take acetaminophen (Tylenol, others) or ibuprofen (Advil, Motrin IB, others). 5) Get medical help if the fever lasts more than five days in a row.";
}
else if (input.includes("fever")) {
    output = "To treat a fever at home: 1)Drink plenty of fluids to stay hydrated. 2)Dress in lightweight clothing. 3)Use a light blanket if you feel chilled, until the chills end. 4)Take acetaminophen (Tylenol, others) or ibuprofen (Advil, Motrin IB, others). 5) Get medical help if the fever lasts more than five days in a row.";
}
else if (input.includes("how do you treat nasal congestion?")) {
    output = "When youâ€™re stuffed up, focus on keeping your nasal passages and sinuses moist. To keep your nasal passages moist, you can: 1)Use a humidifier or vaporizer. 2)Drink lots of fluids. This will thin out your mucus, which could help prevent blocked sinuses. 3)Place a warm, wet towel on your face. It may relieve discomfort and open your nasal passages.";
}
else if (input.includes("what to do if i get a nasal congestion?")) {
    output = "When youâ€™re stuffed up, focus on keeping your nasal passages and sinuses moist. To keep your nasal passages moist, you can: 1)Use a humidifier or vaporizer. 2)Drink lots of fluids. This will thin out your mucus, which could help prevent blocked sinuses. 3)Place a warm, wet towel on your face. It may relieve discomfort and open your nasal passages.";
}
else if (input.includes("which medicine to take if i have a nasal congestion?")) {
    output = "When youâ€™re stuffed up, focus on keeping your nasal passages and sinuses moist. To keep your nasal passages moist, you can: 1)Use a humidifier or vaporizer. 2)Drink lots of fluids. This will thin out your mucus, which could help prevent blocked sinuses. 3)Place a warm, wet towel on your face. It may relieve discomfort and open your nasal passages.";
}
else if (input.includes("what to do if i have a blocked nose?")) {
    output = "When youâ€™re stuffed up, focus on keeping your nasal passages and sinuses moist. To keep your nasal passages moist, you can: 1)Use a humidifier or vaporizer. 2)Drink lots of fluids. This will thin out your mucus, which could help prevent blocked sinuses. 3)Place a warm, wet towel on your face. It may relieve discomfort and open your nasal passages.";
}
else if (input.includes("how do you treat a blocked nose?")) {
    output = "When youâ€™re stuffed up, focus on keeping your nasal passages and sinuses moist. To keep your nasal passages moist, you can: 1)Use a humidifier or vaporizer. 2)Drink lots of fluids. This will thin out your mucus, which could help prevent blocked sinuses. 3)Place a warm, wet towel on your face. It may relieve discomfort and open your nasal passages.";
}
else if (input.includes("how long does nasal congestion last?")) {
    output = "When youâ€™re stuffed up, focus on keeping your nasal passages and sinuses moist. To keep your nasal passages moist, you can: 1)Use a humidifier or vaporizer. 2)Drink lots of fluids. This will thin out your mucus, which could help prevent blocked sinuses. 3)Place a warm, wet towel on your face. It may relieve discomfort and open your nasal passages.";
}
else if (input.includes("how to cure cough?")) {
    output = "1) Honey:- Use honey to treat a cough, mix 2 teaspoons (tsp) with warm water or an herbal tea. Drink this mixture once or twice a day. Do not give honey to children under 1 year of age. 2) Ginger:- Brew up a soothing ginger tea by adding 20â€“40 grams (g) of fresh ginger slices to a cup of hot water. Allow to steep for a few minutes before drinking. Add honey or lemon juice to improve the taste and further soothe a cough. 3) Fluids:- Staying hydrated is vital for those with a cough or cold. Research indicates that drinking liquids at room temperature can alleviate a cough, runny nose, and sneezing.";
}
else if (input.includes("how do you treat cough?")) {
    output = "1) Honey:- Use honey to treat a cough, mix 2 teaspoons (tsp) with warm water or an herbal tea. Drink this mixture once or twice a day. Do not give honey to children under 1 year of age. 2) Ginger:- Brew up a soothing ginger tea by adding 20â€“40 grams (g) of fresh ginger slices to a cup of hot water. Allow to steep for a few minutes before drinking. Add honey or lemon juice to improve the taste and further soothe a cough. 3) Fluids:- Staying hydrated is vital for those with a cough or cold. Research indicates that drinking liquids at room temperature can alleviate a cough, runny nose, and sneezing.";
}
else if (input.includes("what to do if i get a cough?")) {
    output = "1) Honey:- Use honey to treat a cough, mix 2 teaspoons (tsp) with warm water or an herbal tea. Drink this mixture once or twice a day. Do not give honey to children under 1 year of age. 2) Ginger:- Brew up a soothing ginger tea by adding 20â€“40 grams (g) of fresh ginger slices to a cup of hot water. Allow to steep for a few minutes before drinking. Add honey or lemon juice to improve the taste and further soothe a cough. 3) Fluids:- Staying hydrated is vital for those with a cough or cold. Research indicates that drinking liquids at room temperature can alleviate a cough, runny nose, and sneezing.";
}
else if (input.includes("which medicine to take if i get cough?")) {
    output = "1) Honey:- Use honey to treat a cough, mix 2 teaspoons (tsp) with warm water or an herbal tea. Drink this mixture once or twice a day. Do not give honey to children under 1 year of age. 2) Ginger:- Brew up a soothing ginger tea by adding 20â€“40 grams (g) of fresh ginger slices to a cup of hot water. Allow to steep for a few minutes before drinking. Add honey or lemon juice to improve the taste and further soothe a cough. 3) Fluids:- Staying hydrated is vital for those with a cough or cold. Research indicates that drinking liquids at room temperature can alleviate a cough, runny nose, and sneezing.";
}
else if (input.includes("how do you get rid of cough?")) {
    output = "1) Honey:- Use honey to treat a cough, mix 2 teaspoons (tsp) with warm water or an herbal tea. Drink this mixture once or twice a day. Do not give honey to children under 1 year of age. 2) Ginger:- Brew up a soothing ginger tea by adding 20â€“40 grams (g) of fresh ginger slices to a cup of hot water. Allow to steep for a few minutes before drinking. Add honey or lemon juice to improve the taste and further soothe a cough. 3) Fluids:- Staying hydrated is vital for those with a cough or cold. Research indicates that drinking liquids at room temperature can alleviate a cough, runny nose, and sneezing.";
}
else if (input.includes("how do you treat sore throat?")) {
    output = "1) Make sure you get plenty of rest and drink a lot of fluids. 2)Inhale steam,Run hot water in a sink.Drape a towel over you to trap the steam, and have the person lean over the sink with the water running. Tell him to breathe deeply through his mouth and nose for 5 to 10 minutes. Repeat several times a day. 3)Have him sip chicken broth or warm tea with honey. Donâ€™t give honey to a child under 12 months of age.";
}
else if (input.includes("what to do if i get a sore throat?")) {
    output = "1) Make sure you get plenty of rest and drink a lot of fluids. 2)Inhale steam,Run hot water in a sink.Drape a towel over you to trap the steam, and have the person lean over the sink with the water running. Tell him to breathe deeply through his mouth and nose for 5 to 10 minutes. Repeat several times a day. 3)Have him sip chicken broth or warm tea with honey. Donâ€™t give honey to a child under 12 months of age.";
}
else if (input.includes("which medicine to take if i get a sore throat?")) {
    output = "1) Make sure you get plenty of rest and drink a lot of fluids. 2)Inhale steam,Run hot water in a sink.Drape a towel over you to trap the steam, and have the person lean over the sink with the water running. Tell him to breathe deeply through his mouth and nose for 5 to 10 minutes. Repeat several times a day. 3)Have him sip chicken broth or warm tea with honey. Donâ€™t give honey to a child under 12 months of age.";
}
else if (input.includes("how to cure sore throat?")) {
    output = "1) Make sure you get plenty of rest and drink a lot of fluids. 2)Inhale steam,Run hot water in a sink.Drape a towel over you to trap the steam, and have the person lean over the sink with the water running. Tell him to breathe deeply through his mouth and nose for 5 to 10 minutes. Repeat several times a day. 3)Have him sip chicken broth or warm tea with honey. Donâ€™t give honey to a child under 12 months of age.";
}
else if (input.includes("how do you treat gas problems?")) {
    output = "1) Replenish body fluids 2)Do not take antidiarrheal drugs or laxatives or pain medication, unless specified by a medical professional.3)Taking antacids may help, per recommendation of a healthcare professional. 4)If prone to frequent heartburns, seek medical help. 5)Taking meals that are not spicy regularly, can relieve ulcer pains. 6)Seek medical help, if conditions persist or continue to worsen";
}
else if (input.includes("what to do if i have gastrointestinal problems?")) {
    output = "1) Replenish body fluids 2)Do not take antidiarrheal drugs or laxatives or pain medication, unless specified by a medical professional.3)Taking antacids may help, per recommendation of a healthcare professional. 4)If prone to frequent heartburns, seek medical help. 5)Taking meals that are not spicy regularly, can relieve ulcer pains. 6)Seek medical help, if conditions persist or continue to worsen";
}
else if (input.includes("which medicine to take if i get gas problem?")) {
    output = "1) Replenish body fluids 2)Do not take antidiarrheal drugs or laxatives or pain medication, unless specified by a medical professional.3)Taking antacids may help, per recommendation of a healthcare professional. 4)If prone to frequent heartburns, seek medical help. 5)Taking meals that are not spicy regularly, can relieve ulcer pains. 6)Seek medical help, if conditions persist or continue to worsen";
}
else if (input.includes("how to cure gas problems?")) {
    output = "1) Replenish body fluids 2)Do not take antidiarrheal drugs or laxatives or pain medication, unless specified by a medical professional.3)Taking antacids may help, per recommendation of a healthcare professional. 4)If prone to frequent heartburns, seek medical help. 5)Taking meals that are not spicy regularly, can relieve ulcer pains. 6)Seek medical help, if conditions persist or continue to worsen";
}
else if (input.includes("how do you treat skin problems?")) {
    output = "1)Hydrocortisone cream. 2)Ointments like calamine lotion. 3)Antihistamines. 4)Cold compresses. 5)Oatmeal baths. 6)Talk to your doctor about what's best for your specific rash.";
}
else if (input.includes("what to do if i get a skin allergy?")) {
    output = "1)Hydrocortisone cream. 2)Ointments like calamine lotion. 3)Antihistamines. 4)Cold compresses. 5)Oatmeal baths. 6)Talk to your doctor about what's best for your specific rash.";
}
else if (input.includes("which medicine to take if i get a skin allergy?")) {
    output = "1)Hydrocortisone cream. 2)Ointments like calamine lotion. 3)Antihistamines. 4)Cold compresses. 5)Oatmeal baths. 6)Talk to your doctor about what's best for your specific rash.";
}
else if (input.includes("how to cure skin allergy?")) {
    output = "1)Hydrocortisone cream. 2)Ointments like calamine lotion. 3)Antihistamines. 4)Cold compresses. 5)Oatmeal baths. 6)Talk to your doctor about what's best for your specific rash.";
}
else if (input.includes("how do you treat abdonominal pain?")) {
    output = "1)Provide clear fluids to sip, such as water, broth, or fruit juice diluted with water. 2)Serve bland foods, such as saltine crackers, plain bread, dry toast, rice, gelatin, or applesauce. 3)Avoid spicy or greasy foods and caffeinated or carbonated drinks until 48 hours after all symptoms have gone away. ";
}
else if (input.includes("what to do if i get a abdonominal pain?")) {
    output = "1)Provide clear fluids to sip, such as water, broth, or fruit juice diluted with water. 2)Serve bland foods, such as saltine crackers, plain bread, dry toast, rice, gelatin, or applesauce. 3)Avoid spicy or greasy foods and caffeinated or carbonated drinks until 48 hours after all symptoms have gone away. ";
}
else if (input.includes("which medicine to take if i get a abdonominal pain?")) {
    output = "1)Provide clear fluids to sip, such as water, broth, or fruit juice diluted with water. 2)Serve bland foods, such as saltine crackers, plain bread, dry toast, rice, gelatin, or applesauce. 3)Avoid spicy or greasy foods and caffeinated or carbonated drinks until 48 hours after all symptoms have gone away. ";
}
else if (input.includes("how to cure abdonominal pain?")) {
    output = "1)Provide clear fluids to sip, such as water, broth, or fruit juice diluted with water. 2)Serve bland foods, such as saltine crackers, plain bread, dry toast, rice, gelatin, or applesauce. 3)Avoid spicy or greasy foods and caffeinated or carbonated drinks until 48 hours after all symptoms have gone away. ";
}
else if (input.includes("how do you treat bruises?")) {
    output = "1)Ice the bruise with an ice pack wrapped in a towel. 2)Leave it in place for 10 to 20 minutes. 3)Repeat several times a day for a day or two as needed. 4)Compress the bruised area if it is swelling, using an elastic bandage. ";
}
else if (input.includes("what to do if i get a bruise?")) {
    output = "1)Ice the bruise with an ice pack wrapped in a towel. 2)Leave it in place for 10 to 20 minutes. 3)Repeat several times a day for a day or two as needed. 4)Compress the bruised area if it is swelling, using an elastic bandage. ";
}
else if (input.includes("which medicine to take if i get a bruise?")) {
    output = "1)Ice the bruise with an ice pack wrapped in a towel. 2)Leave it in place for 10 to 20 minutes. 3)Repeat several times a day for a day or two as needed. 4)Compress the bruised area if it is swelling, using an elastic bandage. ";
}
else if (input.includes("how to cure bruises?")) {
    output = "1)Ice the bruise with an ice pack wrapped in a towel. 2)Leave it in place for 10 to 20 minutes. 3)Repeat several times a day for a day or two as needed. 4)Compress the bruised area if it is swelling, using an elastic bandage. ";
}
else if (input.includes("how do you treat a broken toe?")) {
    output = "1)To help decrease pain and swelling in a broken toe, elevate the foot, ice the injury, and stay off the foot. 2)Depending on the severity of the fracture, the toe may need to be put back into place (reduced), and some compound toe fractures may require surgery.3) Most broken toes heal without complications in six weeks.";
}
else if (input.includes("what to do if i get a broken toe?")) {
    output = "1)To help decrease pain and swelling in a broken toe, elevate the foot, ice the injury, and stay off the foot. 2)Depending on the severity of the fracture, the toe may need to be put back into place (reduced), and some compound toe fractures may require surgery.3) Most broken toes heal without complications in six weeks.";
}
else if (input.includes("which medicine to take if i get a broken toe?")) {
    output = "1)To help decrease pain and swelling in a broken toe, elevate the foot, ice the injury, and stay off the foot. 2)Depending on the severity of the fracture, the toe may need to be put back into place (reduced), and some compound toe fractures may require surgery.3) Most broken toes heal without complications in six weeks.";
}
else if (input.includes("how to cure broken toe?")) {
    output = "1)To help decrease pain and swelling in a broken toe, elevate the foot, ice the injury, and stay off the foot. 2)Depending on the severity of the fracture, the toe may need to be put back into place (reduced), and some compound toe fractures may require surgery.3) Most broken toes heal without complications in six weeks.";
}
else if (input.includes("how do you treat choking?")) {
    output = "1)Encourage them to keep coughing to try to clear the blockage. 2)Ask them to try to spit out the object if it's in their mouth. 3)If coughing doesn't work, start back blows and Abdonominal thrusts";
}
else if (input.includes("what to do if i get a choke?")) {
    output = "1)Encourage them to keep coughing to try to clear the blockage. 2)Ask them to try to spit out the object if it's in their mouth. 3)If coughing doesn't work, start back blows and Abdonominal thrusts";
}
else if (input.includes("which medicine to take if i get choked?")) {
    output = "1)Encourage them to keep coughing to try to clear the blockage. 2)Ask them to try to spit out the object if it's in their mouth. 3)If coughing doesn't work, start back blows and Abdonominal thrusts";
}
else if (input.includes("how to cure choking?")) {
    output = "1)Encourage them to keep coughing to try to clear the blockage. 2)Ask them to try to spit out the object if it's in their mouth. 3)If coughing doesn't work, start back blows and Abdonominal thrusts";
}
else if (input.includes("how do you treat a wound?")) {
    output = "1)Rinse the cut or wound with water and apply pressure with sterile gauze, a bandage, or a clean cloth. 2)If blood soaks through the bandage, place another bandage on top of the first and keep applying pressure. 3)Raise the injured body part to slow bleeding. 4)When bleeding stops, cover the wound with a new, clean bandage.";
}
else if (input.includes("what to do if i get a wound?")) {
    output = "1)Rinse the cut or wound with water and apply pressure with sterile gauze, a bandage, or a clean cloth. 2)If blood soaks through the bandage, place another bandage on top of the first and keep applying pressure. 3)Raise the injured body part to slow bleeding. 4)When bleeding stops, cover the wound with a new, clean bandage.";
}
else if (input.includes("which medicine to take if i get wounded?")) {
    output = "1)Rinse the cut or wound with water and apply pressure with sterile gauze, a bandage, or a clean cloth. 2)If blood soaks through the bandage, place another bandage on top of the first and keep applying pressure. 3)Raise the injured body part to slow bleeding. 4)When bleeding stops, cover the wound with a new, clean bandage.";
}
else if (input.includes("how to cure a wound?")) {
    output = "1)Rinse the cut or wound with water and apply pressure with sterile gauze, a bandage, or a clean cloth. 2)If blood soaks through the bandage, place another bandage on top of the first and keep applying pressure. 3)Raise the injured body part to slow bleeding. 4)When bleeding stops, cover the wound with a new, clean bandage.";
}
else if (input.includes("how do you treat diarrhea?")) {
    output = "1)Hydrating the body is essential for recovering from diarrhea.This causes the body to lose electrolytes such as sodium and chloride. 2)It is highly recommended to avoid dairy products, as they may worsen diarrhea in some people. 3)However, if diarrhea lasts for more than 2 days, seek medical advice to avoid complications.";
}
else if (input.includes("what to do if i get diarrhea?")) {
    output = "1)Hydrating the body is essential for recovering from diarrhea.This causes the body to lose electrolytes such as sodium and chloride. 2)It is highly recommended to avoid dairy products, as they may worsen diarrhea in some people. 3)However, if diarrhea lasts for more than 2 days, seek medical advice to avoid complications.";
}
else if (input.includes("which medicine to take if i get diarrhea?")) {
    output = "1)Hydrating the body is essential for recovering from diarrhea.This causes the body to lose electrolytes such as sodium and chloride. 2)It is highly recommended to avoid dairy products, as they may worsen diarrhea in some people. 3)However, if diarrhea lasts for more than 2 days, seek medical advice to avoid complications.";
}
else if (input.includes("how to cure diarrhea?")) {
    output = "1)Hydrating the body is essential for recovering from diarrhea.This causes the body to lose electrolytes such as sodium and chloride. 2)It is highly recommended to avoid dairy products, as they may worsen diarrhea in some people. 3)However, if diarrhea lasts for more than 2 days, seek medical advice to avoid complications.";
}
else if (input.includes("how do you treat a frost bite?")) {
    output = "1)Get out of the cold. Once you're in a warm space, remove wet clothes and wrap up in a warm blanket. 2) Gently rewarm frostbitten areas. Soak frostbitten fingers, toes or other extremities in warm water â€” 105 to 110 F (about 40 to 43 C). If a thermometer isn't available, test the water by placing an uninjured hand or elbow in it â€” it should feel very warm, not hot. Soak for 20 to 30 minutes or until the skin becomes its normal color or loses its numbness. For the face or ears, apply a warm, wet washcloth. ";
}
else if (input.includes("what to do if i get a frost bite?")) {
    output = "1)Get out of the cold. Once you're in a warm space, remove wet clothes and wrap up in a warm blanket. 2) Gently rewarm frostbitten areas. Soak frostbitten fingers, toes or other extremities in warm water â€” 105 to 110 F (about 40 to 43 C). If a thermometer isn't available, test the water by placing an uninjured hand or elbow in it â€” it should feel very warm, not hot. Soak for 20 to 30 minutes or until the skin becomes its normal color or loses its numbness. For the face or ears, apply a warm, wet washcloth. ";
}
else if (input.includes("which medicine to take if i get a frost bite?")) {
    output = "1)Get out of the cold. Once you're in a warm space, remove wet clothes and wrap up in a warm blanket. 2) Gently rewarm frostbitten areas. Soak frostbitten fingers, toes or other extremities in warm water â€” 105 to 110 F (about 40 to 43 C). If a thermometer isn't available, test the water by placing an uninjured hand or elbow in it â€” it should feel very warm, not hot. Soak for 20 to 30 minutes or until the skin becomes its normal color or loses its numbness. For the face or ears, apply a warm, wet washcloth. ";
}
else if (input.includes("how to cure frost bite?")) {
    output = "1)Get out of the cold. Once you're in a warm space, remove wet clothes and wrap up in a warm blanket. 2) Gently rewarm frostbitten areas. Soak frostbitten fingers, toes or other extremities in warm water â€” 105 to 110 F (about 40 to 43 C). If a thermometer isn't available, test the water by placing an uninjured hand or elbow in it â€” it should feel very warm, not hot. Soak for 20 to 30 minutes or until the skin becomes its normal color or loses its numbness. For the face or ears, apply a warm, wet washcloth. ";
}
else if (input.includes("how do you treat heat exhaustion?")) {
    output = "1)Move the person out of the heat and into a shady or air-conditioned place. Lay the person down and elevate the legs and feet slightly. Remove tight or heavy clothing. Have the person drink cool water or other nonalcoholic beverage without caffeine ";
}
else if (input.includes("what to do if i feel exhausted due to heat?")) {
    output = "1)Move the person out of the heat and into a shady or air-conditioned place. Lay the person down and elevate the legs and feet slightly. Remove tight or heavy clothing. Have the person drink cool water or other nonalcoholic beverage without caffeine ";
}
else if (input.includes("which medicine to take if i get exhausted?")) {
    output = "1)Move the person out of the heat and into a shady or air-conditioned place. Lay the person down and elevate the legs and feet slightly. Remove tight or heavy clothing. Have the person drink cool water or other nonalcoholic beverage without caffeine ";
}
else if (input.includes("how to cure heat exhaustion?")) {
    output = "1)Move the person out of the heat and into a shady or air-conditioned place. Lay the person down and elevate the legs and feet slightly. Remove tight or heavy clothing. Have the person drink cool water or other nonalcoholic beverage without caffeine ";
}
else if (input.includes("how do you treat heat stroke?")) {
    output = "1)Cool the person's entire body by sponging or spraying cold water, and fan the person to help lower the person's body temperature. Watch for signs of rapidly progressing heatstroke, such as seizure, unconsciousness for longer than a few seconds, and moderate to severe difficulty breathing. ";
}
else if (input.includes("what to do if i get a heat stroke?")) {
    output = "1)Cool the person's entire body by sponging or spraying cold water, and fan the person to help lower the person's body temperature. Watch for signs of rapidly progressing heatstroke, such as seizure, unconsciousness for longer than a few seconds, and moderate to severe difficulty breathing. ";
}
else if (input.includes("which medicine to take if i get stroke?")) {
    output = "1)Cool the person's entire body by sponging or spraying cold water, and fan the person to help lower the person's body temperature. Watch for signs of rapidly progressing heatstroke, such as seizure, unconsciousness for longer than a few seconds, and moderate to severe difficulty breathing. ";
}
else if (input.includes("how to cure a heat stroke?")) {
    output = "1)Cool the person's entire body by sponging or spraying cold water, and fan the person to help lower the person's body temperature. Watch for signs of rapidly progressing heatstroke, such as seizure, unconsciousness for longer than a few seconds, and moderate to severe difficulty breathing. ";
}
else if (input.includes("how do you treat a insect bite?")) {
    output = "1) Wash the affected area with soap and water. Apply a cold compress (such as a flannel or cloth cooled with cold water) or an ice pack to any swelling for at least 10 minutes. Raise or elevate the affected area if possible, as this can help reduce swelling. ";
}
else if (input.includes("what to do if a insect bites me?")) {
    output = "1) Wash the affected area with soap and water. Apply a cold compress (such as a flannel or cloth cooled with cold water) or an ice pack to any swelling for at least 10 minutes. Raise or elevate the affected area if possible, as this can help reduce swelling. ";
}
else if (input.includes("which medicine to take if i get bitten by a insect?")) {
    output = "1) Wash the affected area with soap and water. Apply a cold compress (such as a flannel or cloth cooled with cold water) or an ice pack to any swelling for at least 10 minutes. Raise or elevate the affected area if possible, as this can help reduce swelling. ";
}
else if (input.includes("how to cure insect bite?")) {
    output = "1) Wash the affected area with soap and water. Apply a cold compress (such as a flannel or cloth cooled with cold water) or an ice pack to any swelling for at least 10 minutes. Raise or elevate the affected area if possible, as this can help reduce swelling. ";
}
else if (input.includes("how do you treat a bleeding nose?")) {
    output = "1) Wash the affected area with soap and water. Apply a cold compress (such as a flannel or cloth cooled with cold water) or an ice pack to any swelling for at least 10 minutes. Raise or elevate the affected area if possible, as this can help reduce swelling ";
}
else if (input.includes("what to do if i my nose is bleeding?")) {
    output = "1) Wash the affected area with soap and water. Apply a cold compress (such as a flannel or cloth cooled with cold water) or an ice pack to any swelling for at least 10 minutes. Raise or elevate the affected area if possible, as this can help reduce swelling ";
}
else if (input.includes("which medicine to take if i get nose bleed?")) {
    output = "1) Wash the affected area with soap and water. Apply a cold compress (such as a flannel or cloth cooled with cold water) or an ice pack to any swelling for at least 10 minutes. Raise or elevate the affected area if possible, as this can help reduce swelling ";
}
else if (input.includes("how to cure nose bleeding?")) {
    output = "1) Wash the affected area with soap and water. Apply a cold compress (such as a flannel or cloth cooled with cold water) or an ice pack to any swelling for at least 10 minutes. Raise or elevate the affected area if possible, as this can help reduce swelling ";
}
else if (input.includes("how do you treat a pulled muscle?")) {
    output = "1) Apply ice for 10 to 15 minutes every 1 hour for the first day and every 3 to 4 hours after that. Use ice for the first 3 days. After 3 days, either heat or ice may be helpful if you still have pain. Rest the pulled muscle for at least a day. ";
}
else if (input.includes("what to do if my muscle is pulled?")) {
    output = "1) Apply ice for 10 to 15 minutes every 1 hour for the first day and every 3 to 4 hours after that. Use ice for the first 3 days. After 3 days, either heat or ice may be helpful if you still have pain. Rest the pulled muscle for at least a day. ";
}
else if (input.includes("which medicine to take if i got pulled muscle?")) {
    output = "1) Apply ice for 10 to 15 minutes every 1 hour for the first day and every 3 to 4 hours after that. Use ice for the first 3 days. After 3 days, either heat or ice may be helpful if you still have pain. Rest the pulled muscle for at least a day. ";
}
else if (input.includes("how to cure a pulled muscle?")) {
    output = "1) Apply ice for 10 to 15 minutes every 1 hour for the first day and every 3 to 4 hours after that. Use ice for the first 3 days. After 3 days, either heat or ice may be helpful if you still have pain. Rest the pulled muscle for at least a day. ";
}
else if (input.includes("how do you treat rectal bleeding?")) {
    output = "1) For minimal bleeding due to hemorrhoids or rectal fissures, physicians will usually direct home treatment with lots of water, ice packs and possibly over the counter ointments or suppositories to create movement in the bowels or to soften the stool. Emergency treatment might include an IV in the case of dehydration. ";
}
else if (input.includes("what to do if i get a rectal bleeding?")) {
    output = "1) For minimal bleeding due to hemorrhoids or rectal fissures, physicians will usually direct home treatment with lots of water, ice packs and possibly over the counter ointments or suppositories to create movement in the bowels or to soften the stool. Emergency treatment might include an IV in the case of dehydration. ";
}
else if (input.includes("which medicine to take if i get rectal bleeding?")) {
    output = "1) For minimal bleeding due to hemorrhoids or rectal fissures, physicians will usually direct home treatment with lots of water, ice packs and possibly over the counter ointments or suppositories to create movement in the bowels or to soften the stool. Emergency treatment might include an IV in the case of dehydration. ";
}
else if (input.includes("how to cure rectal bleeding?")) {
    output = "1) For minimal bleeding due to hemorrhoids or rectal fissures, physicians will usually direct home treatment with lots of water, ice packs and possibly over the counter ointments or suppositories to create movement in the bowels or to soften the stool. Emergency treatment might include an IV in the case of dehydration. ";
}
else if (input.includes("how do you treat sun burn?")) {
    output = "1) Cool the skin, 2) Drink water to prevent dehydration., 3) Take a pain reliever such as ibuprofen (Advil, Motrin IB, others) to help with the discomfort and swelling of sunburn. ";
}
else if (input.includes("what to do if i get a sun burn?")) {
    output = "1) Cool the skin, 2) Drink water to prevent dehydration., 3) Take a pain reliever such as ibuprofen (Advil, Motrin IB, others) to help with the discomfort and swelling of sunburn. ";
}
else if (input.includes("which medicine to take if i get sun burn?")) {
    output = "1) Cool the skin, 2) Drink water to prevent dehydration., 3) Take a pain reliever such as ibuprofen (Advil, Motrin IB, others) to help with the discomfort and swelling of sunburn. ";
}
else if (input.includes("how to cure a sun burn?")) {
    output = "1) Cool the skin, 2) Drink water to prevent dehydration., 3) Take a pain reliever such as ibuprofen (Advil, Motrin IB, others) to help with the discomfort and swelling of sunburn. ";
}
else if (input.includes("how do you treat testicle pain?")) {
    output = "1) For pain, take over-the-counter medication such as acetaminophen (Tylenol) or ibuprofen (Advil, Motrin). For swelling, apply an ice pack to the scrotum. ";
}
else if (input.includes("what to do if i get a testicle pain?")) {
    output = "1) For pain, take over-the-counter medication such as acetaminophen (Tylenol) or ibuprofen (Advil, Motrin). For swelling, apply an ice pack to the scrotum. ";
}
else if (input.includes("which medicine to take if i get a testicle pain?")) {
    output = "1) For pain, take over-the-counter medication such as acetaminophen (Tylenol) or ibuprofen (Advil, Motrin). For swelling, apply an ice pack to the scrotum. ";
}
else if (input.includes("how to cure testicle pain?")) {
    output = "1) For pain, take over-the-counter medication such as acetaminophen (Tylenol) or ibuprofen (Advil, Motrin). For swelling, apply an ice pack to the scrotum. ";
}
else if (input.includes("how do you treat a vertigo?")) {
    output = "1) Relieve or Prevent Dizziness. Have the person lie down and rest, 2) Keep the Person Safe. Help the person avoid falls, 3) Call a Health Care Provider. Any new signs and symptoms of vertigo should be checked by a health care provider.";
}
else if (input.includes("what to do if i get a vertigo?")) {
    output = "1) Relieve or Prevent Dizziness. Have the person lie down and rest, 2) Keep the Person Safe. Help the person avoid falls, 3) Call a Health Care Provider. Any new signs and symptoms of vertigo should be checked by a health care provider.";
}
else if (input.includes("which medicine to take if i get vertigo?")) {
    output = "1) Relieve or Prevent Dizziness. Have the person lie down and rest, 2) Keep the Person Safe. Help the person avoid falls, 3) Call a Health Care Provider. Any new signs and symptoms of vertigo should be checked by a health care provider.";
}
else if (input.includes("how to cure a vertigo?")) {
    output = "1) Relieve or Prevent Dizziness. Have the person lie down and rest, 2) Keep the Person Safe. Help the person avoid falls, 3) Call a Health Care Provider. Any new signs and symptoms of vertigo should be checked by a health care provider.";
}
else if (input.includes("how do you treat bleeding?")) {
    output = "1) First aid actions to manage external bleeding include applying direct pressure to the wound, maintaining the pressure using pads and bandages, and, raising the injured limb above the level of the heart if possible. ";
}
else if (input.includes("what to do if i get a bleeding?")) {
    output = "1) First aid actions to manage external bleeding include applying direct pressure to the wound, maintaining the pressure using pads and bandages, and, raising the injured limb above the level of the heart if possible. ";
}
else if (input.includes("which medicine to take if i get bleeding?")) {
    output = "1) First aid actions to manage external bleeding include applying direct pressure to the wound, maintaining the pressure using pads and bandages, and, raising the injured limb above the level of the heart if possible. ";
}
else if (input.includes("how to cure bleeding?")) {
    output = "1) First aid actions to manage external bleeding include applying direct pressure to the wound, maintaining the pressure using pads and bandages, and, raising the injured limb above the level of the heart if possible. ";
}
else if (input.includes("how do you treat an eye injury?")) {
    output = "1) DO NOT rub the eye, 2)Blink several times and allow tears to flush out the particle, 3) Lift the upper eyelid over the lashes of your lower lid to let the eyelashes try to brush the particle out., 4) Use eyewash, saline solution or running tap water to flush the eye out ";
}
else if (input.includes("what to do if i get a eye injury?")) {
    output = "1) DO NOT rub the eye, 2)Blink several times and allow tears to flush out the particle, 3) Lift the upper eyelid over the lashes of your lower lid to let the eyelashes try to brush the particle out., 4) Use eyewash, saline solution or running tap water to flush the eye out ";
}
else if (input.includes("which medicine to take if i injured my eye?")) {
    output = "1) DO NOT rub the eye, 2)Blink several times and allow tears to flush out the particle, 3) Lift the upper eyelid over the lashes of your lower lid to let the eyelashes try to brush the particle out., 4) Use eyewash, saline solution or running tap water to flush the eye out ";
}
else if (input.includes("how to cure injured eye?")) {
    output = "1) DO NOT rub the eye, 2)Blink several times and allow tears to flush out the particle, 3) Lift the upper eyelid over the lashes of your lower lid to let the eyelashes try to brush the particle out., 4) Use eyewash, saline solution or running tap water to flush the eye out ";
}
else if (input.includes("how do you treat a chemical burn?")) {
    output = "1) rinsed with water Â· Flush the area for at least 20 minutes. Â· As you flush the area, take off any clothing or jewellery that has the chemical on it ,2) Don't use a strong stream of water, if possible., 3)Don't try to neutralize the burn with acid or alkali. This could cause a chemical reaction that worsens the burn, 4) Don't put antibiotic ointment on the burn. ";
}
else if (input.includes("what to do if i get a chemical burn?")) {
    output = "1) rinsed with water Â· Flush the area for at least 20 minutes. Â· As you flush the area, take off any clothing or jewellery that has the chemical on it ,2) Don't use a strong stream of water, if possible., 3)Don't try to neutralize the burn with acid or alkali. This could cause a chemical reaction that worsens the burn, 4) Don't put antibiotic ointment on the burn. ";
}
else if (input.includes("which medicine to take if i get burn due to chemicals?")) {
    output = "1) rinsed with water Â· Flush the area for at least 20 minutes. Â· As you flush the area, take off any clothing or jewellery that has the chemical on it ,2) Don't use a strong stream of water, if possible., 3)Don't try to neutralize the burn with acid or alkali. This could cause a chemical reaction that worsens the burn, 4) Don't put antibiotic ointment on the burn. ";
}
else if (input.includes("how to cure chemical burn?")) {
    output = "1) rinsed with water Â· Flush the area for at least 20 minutes. Â· As you flush the area, take off any clothing or jewellery that has the chemical on it ,2) Don't use a strong stream of water, if possible., 3)Don't try to neutralize the burn with acid or alkali. This could cause a chemical reaction that worsens the burn, 4) Don't put antibiotic ointment on the burn. ";
}
else if (input.includes("how do you treat a poison?")) {
    output = "1) Get to fresh air right away. Call the toll-free Poison Help line (1-800-222-1222), which connects you to your local poison center, 2) Take off any clothing the poison touched. Rinse skin with running water for 15 to 20 minutes. Call the toll-free Poison Help line (1-800-222-1222), which connects you to your local poison center.,3) If the person swallowed the wrong medicine or too much medicine: Call Poison Help (1-800-222-1222), which connects you to your local poison center.,4) Every poisoning is different. ";
}
else if (input.includes("what to do if i get poison?")) {
    output = "1) Get to fresh air right away. Call the toll-free Poison Help line (1-800-222-1222), which connects you to your local poison center, 2) Take off any clothing the poison touched. Rinse skin with running water for 15 to 20 minutes. Call the toll-free Poison Help line (1-800-222-1222), which connects you to your local poison center.,3) If the person swallowed the wrong medicine or too much medicine: Call Poison Help (1-800-222-1222), which connects you to your local poison center.,4) Every poisoning is different. ";
}
else if (input.includes("which medicine to take if i am poisoned?")) {
    output = "1) Get to fresh air right away. Call the toll-free Poison Help line (1-800-222-1222), which connects you to your local poison center, 2) Take off any clothing the poison touched. Rinse skin with running water for 15 to 20 minutes. Call the toll-free Poison Help line (1-800-222-1222), which connects you to your local poison center.,3) If the person swallowed the wrong medicine or too much medicine: Call Poison Help (1-800-222-1222), which connects you to your local poison center.,4) Every poisoning is different. ";
}
else if (input.includes("how to cure poisoning?")) {
    output = "1) Get to fresh air right away. Call the toll-free Poison Help line (1-800-222-1222), which connects you to your local poison center, 2) Take off any clothing the poison touched. Rinse skin with running water for 15 to 20 minutes. Call the toll-free Poison Help line (1-800-222-1222), which connects you to your local poison center.,3) If the person swallowed the wrong medicine or too much medicine: Call Poison Help (1-800-222-1222), which connects you to your local poison center.,4) Every poisoning is different. ";
}
else if (input.includes("how do you treat broken teeth ?")) {
    output = "1) lick the tooth clean if it's dirty, or rinse it in water. put it back into position (adult teeth only); never try to re-insert a baby tooth (see below) bite on a handkerchief to hold the tooth in place. go to see a dentist as an emergency ";
}
else if (input.includes("what to do if my teeth got broken?")) {
    output = "1) lick the tooth clean if it's dirty, or rinse it in water. put it back into position (adult teeth only); never try to re-insert a baby tooth (see below) bite on a handkerchief to hold the tooth in place. go to see a dentist as an emergency ";
}
else if (input.includes("which medicine to take if i get broken teeth?")) {
    output = "1) lick the tooth clean if it's dirty, or rinse it in water. put it back into position (adult teeth only); never try to re-insert a baby tooth (see below) bite on a handkerchief to hold the tooth in place. go to see a dentist as an emergency ";
}
else if (input.includes("cure broken teeth?")) {
    output = "1) lick the tooth clean if it's dirty, or rinse it in water. put it back into position (adult teeth only); never try to re-insert a baby tooth (see below) bite on a handkerchief to hold the tooth in place. go to see a dentist as an emergency ";
}
else if (input.includes("how do you treat a seizure?")) {
    output = "1) Stay calm and remain with the person, 2) If they have food or fluid in their mouth, roll them onto their side immediately, 3) Place something soft under their head and loosen any tight clothing. ";
}
else if (input.includes("what to do if i get a seizure?")) {
    output = "1) Stay calm and remain with the person, 2) If they have food or fluid in their mouth, roll them onto their side immediately, 3) Place something soft under their head and loosen any tight clothing. ";
}
else if (input.includes("which medicine to take if i get seizure?")) {
    output = "1) Stay calm and remain with the person, 2) If they have food or fluid in their mouth, roll them onto their side immediately, 3) Place something soft under their head and loosen any tight clothing. ";
}
else if (input.includes("how to cure seizure?")) {
    output = "1) Stay calm and remain with the person, 2) If they have food or fluid in their mouth, roll them onto their side immediately, 3) Place something soft under their head and loosen any tight clothing. ";
}
else if (input.includes("how do you treat a head injury?")) {
    output = "1) Apply firm pressure to the wound with sterile gauze or a clean cloth. But don't apply direct pressure to the wound if you suspect a skull fracture. ";
}
else if (input.includes("what to do if i get a head injury?")) {
    output = "1) Apply firm pressure to the wound with sterile gauze or a clean cloth. But don't apply direct pressure to the wound if you suspect a skull fracture. ";
}
else if (input.includes("which medicine to take if i get injured in the head?")) {
    output = "1) Apply firm pressure to the wound with sterile gauze or a clean cloth. But don't apply direct pressure to the wound if you suspect a skull fracture. ";
}
else if (input.includes("how to cure head injury?")) {
    output = "1) Apply firm pressure to the wound with sterile gauze or a clean cloth. But don't apply direct pressure to the wound if you suspect a skull fracture. ";
}
else if (input.includes("how do you treat faint?")) {
    output = "1) Lie down or sit down. To reduce the chance of fainting again, don't get up too quickly, 2) Place your head between your knees if you sit down, 3)Position the person on his or her back. If there are no injuries and the person is breathing, raise the person's legs above heart level â€” about 12 inches (30 centimeters) â€” if possible. Loosen belts, collars or other constrictive clothing. ";
}
else if (input.includes("what to do if i feel like fainting?")) {
    output = "1) Lie down or sit down. To reduce the chance of fainting again, don't get up too quickly, 2) Place your head between your knees if you sit down, 3)Position the person on his or her back. If there are no injuries and the person is breathing, raise the person's legs above heart level â€” about 12 inches (30 centimeters) â€” if possible. Loosen belts, collars or other constrictive clothing. ";
}
else if (input.includes("which medicine to take if i get a faint?")) {
    output = "1) Lie down or sit down. To reduce the chance of fainting again, don't get up too quickly, 2) Place your head between your knees if you sit down, 3)Position the person on his or her back. If there are no injuries and the person is breathing, raise the person's legs above heart level â€” about 12 inches (30 centimeters) â€” if possible. Loosen belts, collars or other constrictive clothing. ";
}
else if (input.includes("how to cure fainting?")) {
    output = "1) Lie down or sit down. To reduce the chance of fainting again, don't get up too quickly, 2) Place your head between your knees if you sit down, 3)Position the person on his or her back. If there are no injuries and the person is breathing, raise the person's legs above heart level â€” about 12 inches (30 centimeters) â€” if possible. Loosen belts, collars or other constrictive clothing. ";
}
else if (input.includes("how do you treat a mild headache?")) {
    output = "Give ibuprofen (Advil, Motrin), aspirin, or acetaminophen (Tylenol) for pain. Avoid ibuprofen and other NSAIDs if the person has heart failure or kidney failure. Do not give aspirin to a child under age 18.";
}
else if (input.includes("what to do if i get a mild headache?")) {
    output = "Give ibuprofen (Advil, Motrin), aspirin, or acetaminophen (Tylenol) for pain. Avoid ibuprofen and other NSAIDs if the person has heart failure or kidney failure. Do not give aspirin to a child under age 18.";
}
else if (input.includes("which medicine to take if i have a mild headache?")) {
    output = "Give ibuprofen (Advil, Motrin), aspirin, or acetaminophen (Tylenol) for pain. Avoid ibuprofen and other NSAIDs if the person has heart failure or kidney failure. Do not give aspirin to a child under age 18.";
}
else if (input.includes("how to cure a mild headache?")) {
    output = "Give ibuprofen (Advil, Motrin), aspirin, or acetaminophen (Tylenol) for pain. Avoid ibuprofen and other NSAIDs if the person has heart failure or kidney failure. Do not give aspirin to a child under age 18.";
}
else if (input.includes("how do you treat a cold?")) {
    output = "1)Keeping hydrated is absolutely vital to help 'flush' out the cold, as well as to break down congestion and keep your throat lubricated. 2)Vitamin C is extremely helpful when fighting infection, so at the first sign of a cold be sure to increase your intake by eating plenty of berries, citrus fruits, papayas, broccoli and red peppers which will help keep you protected. 3)When it comes to combating a cold,Vitamin D is essential in helping to regulate immune response.";
}
else if (input.includes("what to do if i get a mild cold?")) {
    output = "1)Keeping hydrated is absolutely vital to help 'flush' out the cold, as well as to break down congestion and keep your throat lubricated. 2)Vitamin C is extremely helpful when fighting infection, so at the first sign of a cold be sure to increase your intake by eating plenty of berries, citrus fruits, papayas, broccoli and red peppers which will help keep you protected. 3)When it comes to combating a cold,Vitamin D is essential in helping to regulate immune response.";
}
else if (input.includes("which medicine to take if i have a cold?")) {
    output = "1)Keeping hydrated is absolutely vital to help 'flush' out the cold, as well as to break down congestion and keep your throat lubricated. 2)Vitamin C is extremely helpful when fighting infection, so at the first sign of a cold be sure to increase your intake by eating plenty of berries, citrus fruits, papayas, broccoli and red peppers which will help keep you protected. 3)When it comes to combating a cold,Vitamin D is essential in helping to regulate immune response.";
}
else if (input.includes("how to cure cold?")) {
    output = "1)Keeping hydrated is absolutely vital to help 'flush' out the cold, as well as to break down congestion and keep your throat lubricated. 2)Vitamin C is extremely helpful when fighting infection, so at the first sign of a cold be sure to increase your intake by eating plenty of berries, citrus fruits, papayas, broccoli and red peppers which will help keep you protected. 3)When it comes to combating a cold,Vitamin D is essential in helping to regulate immune response.";
}
else if (input.includes("how do you treat rashes?")) {
    output = "1)Olive oil helps in healing and promotes skin renewal given it is packed with vitamin E and antioxidants. It also soothes the skin and reduces itching. 2)Baking soda is useful in drying skin rashes as also in relieving itching and inflammation. 3)Aloe Vera,Thanks to its antibacterial, antifungal, anti-inflammatory and emollient properties, aloe vera is excellent for treating a number of skin ailments including rashes as also soothing the skin.";
}
else if (input.includes("what to do if i get a rash?")) {
    output = "1)Olive oil helps in healing and promotes skin renewal given it is packed with vitamin E and antioxidants. It also soothes the skin and reduces itching. 2)Baking soda is useful in drying skin rashes as also in relieving itching and inflammation. 3)Aloe Vera,Thanks to its antibacterial, antifungal, anti-inflammatory and emollient properties, aloe vera is excellent for treating a number of skin ailments including rashes as also soothing the skin.";
}
else if (input.includes("which medicine to take if i have a rash?")) {
    output = "1)Olive oil helps in healing and promotes skin renewal given it is packed with vitamin E and antioxidants. It also soothes the skin and reduces itching. 2)Baking soda is useful in drying skin rashes as also in relieving itching and inflammation. 3)Aloe Vera,Thanks to its antibacterial, antifungal, anti-inflammatory and emollient properties, aloe vera is excellent for treating a number of skin ailments including rashes as also soothing the skin.";
}
else if (input.includes("how to cure rash?")) {
    output = "1)Olive oil helps in healing and promotes skin renewal given it is packed with vitamin E and antioxidants. It also soothes the skin and reduces itching. 2)Baking soda is useful in drying skin rashes as also in relieving itching and inflammation. 3)Aloe Vera,Thanks to its antibacterial, antifungal, anti-inflammatory and emollient properties, aloe vera is excellent for treating a number of skin ailments including rashes as also soothing the skin.";
}
else if (input.includes("how do you treat a snake bite?")) {
    output = "While waiting for medical help: 1)Move the person beyond striking distance of the snake. 2)Have the person lie down with wound below the heart. 3)Keep the person calm and at rest, remaining as still as possible to keep venom from spreading. 4)Cover the wound with loose, sterile bandage. 5)Remove any jewelry from the area that was bitten. 6)Remove shoes if the leg or foot was bitten.";
}
else if (input.includes("what to do if i get a snake bite?")) {
    output = "While waiting for medical help: 1)Move the person beyond striking distance of the snake. 2)Have the person lie down with wound below the heart. 3)Keep the person calm and at rest, remaining as still as possible to keep venom from spreading. 4)Cover the wound with loose, sterile bandage. 5)Remove any jewelry from the area that was bitten. 6)Remove shoes if the leg or foot was bitten.";
}
else if (input.includes("which medicine to take if i get a snake bite?")) {
    output = "While waiting for medical help: 1)Move the person beyond striking distance of the snake. 2)Have the person lie down with wound below the heart. 3)Keep the person calm and at rest, remaining as still as possible to keep venom from spreading. 4)Cover the wound with loose, sterile bandage. 5)Remove any jewelry from the area that was bitten. 6)Remove shoes if the leg or foot was bitten.";
}
else if (input.includes("how to cure snake bite?")) {
    output = "While waiting for medical help: 1)Move the person beyond striking distance of the snake. 2)Have the person lie down with wound below the heart. 3)Keep the person calm and at rest, remaining as still as possible to keep venom from spreading. 4)Cover the wound with loose, sterile bandage. 5)Remove any jewelry from the area that was bitten. 6)Remove shoes if the leg or foot was bitten.";
}
else if (input.includes("i got bit by a snake")) {
    output = "While waiting for medical help: 1)Move the person beyond striking distance of the snake. 2)Have the person lie down with wound below the heart. 3)Keep the person calm and at rest, remaining as still as possible to keep venom from spreading. 4)Cover the wound with loose, sterile bandage. 5)Remove any jewelry from the area that was bitten. 6)Remove shoes if the leg or foot was bitten.";
}
else if (input.includes("how do you treat a animal bite?")) {
    output = "1)Wash the wound with soap and warm water. 2)Gently press a clean cloth over the wound to stop the flow of blood. 3)Apply an antibacterial ointment to the wound. 4)Cover with a sterile bandage. 5)Watch for signs of infection. 6)Seek help if you suspect infection or possible exposure to rabies, or if the wound is severe.";
}
else if (input.includes("how do you treat a monkey bite?")) {
    output = "1)Wash the wound with soap and warm water. 2)Gently press a clean cloth over the wound to stop the flow of blood. 3)Apply an antibacterial ointment to the wound. 4)Cover with a sterile bandage. 5)Watch for signs of infection. 6)Seek help if you suspect infection or possible exposure to rabies, or if the wound is severe.";
}
else if (input.includes("how do you treat a dog bite?")) {
    output = "1)Wash the wound with soap and warm water. 2)Gently press a clean cloth over the wound to stop the flow of blood. 3)Apply an antibacterial ointment to the wound. 4)Cover with a sterile bandage. 5)Watch for signs of infection. 6)Seek help if you suspect infection or possible exposure to rabies, or if the wound is severe.";
}
else if (input.includes("what to do if i get a animal bite?")) {
    output = "1)Wash the wound with soap and warm water. 2)Gently press a clean cloth over the wound to stop the flow of blood. 3)Apply an antibacterial ointment to the wound. 4)Cover with a sterile bandage. 5)Watch for signs of infection. 6)Seek help if you suspect infection or possible exposure to rabies, or if the wound is severe.";
}
else if (input.includes("which medicine to take if i get a monekey bite?")) {
    output = "1)Wash the wound with soap and warm water. 2)Gently press a clean cloth over the wound to stop the flow of blood. 3)Apply an antibacterial ointment to the wound. 4)Cover with a sterile bandage. 5)Watch for signs of infection. 6)Seek help if you suspect infection or possible exposure to rabies, or if the wound is severe.";
}
else if (input.includes("how to cure dog bite?")) {
    output = "1)Wash the wound with soap and warm water. 2)Gently press a clean cloth over the wound to stop the flow of blood. 3)Apply an antibacterial ointment to the wound. 4)Cover with a sterile bandage. 5)Watch for signs of infection. 6)Seek help if you suspect infection or possible exposure to rabies, or if the wound is severe.";
}
else if (input.includes("i got bit by a dog")) {
    output = "1)Wash the wound with soap and warm water. 2)Gently press a clean cloth over the wound to stop the flow of blood. 3)Apply an antibacterial ointment to the wound. 4)Cover with a sterile bandage. 5)Watch for signs of infection. 6)Seek help if you suspect infection or possible exposure to rabies, or if the wound is severe.";
}
else if (input.includes("what to do if someone is drowning?")) {
    output = "1)Place your ear next to the person's mouth and nose. Do you feel air on your cheek? 2)Look to see if the person's chest is moving.If the Person is Not Breathing, Check Pulse. 3)Check the person's pulse for 10 seconds.If There is No Pulse, Start CPR.";
}
else if (input.includes("what to do if someone drowned?")) {
    output = "1)Place your ear next to the person's mouth and nose. Do you feel air on your cheek? 2)Look to see if the person's chest is moving.If the Person is Not Breathing, Check Pulse. 3)Check the person's pulse for 10 seconds.If There is No Pulse, Start CPR.";
}
else if (input.includes("what steps to take if i see a drowning person?")) {
    output = "1)Place your ear next to the person's mouth and nose. Do you feel air on your cheek? 2)Look to see if the person's chest is moving.If the Person is Not Breathing, Check Pulse. 3)Check the person's pulse for 10 seconds.If There is No Pulse, Start CPR.";
}
else if (input.includes("how to help a drowning person?")) {
    output = "1)Place your ear next to the person's mouth and nose. Do you feel air on your cheek? 2)Look to see if the person's chest is moving.If the Person is Not Breathing, Check Pulse. 3)Check the person's pulse for 10 seconds.If There is No Pulse, Start CPR.";
}
else if (input.includes("how to give cpr??")) {
    output = "1)For an adult or child, place the heel of one hand on the center of the chest at the nipple line. You can also push with one hand on top of the other. For an infant, place two fingers on the breastbone. 2)For an adult or child, press down at least 2 inches. Make sure not to press on ribs. For an infant, press down about 1 and 1/2 inches. Make sure not to press on the end of the breastbone. 3)Do chest compressions only, at the rate of 100-120 per minute or more. Let the chest rise completely between pushes. 4)Check to see if the person has started breathing.";
}
else if (input.includes("what to do in a cpr?")) {
    output = "1)For an adult or child, place the heel of one hand on the center of the chest at the nipple line. You can also push with one hand on top of the other. For an infant, place two fingers on the breastbone. 2)For an adult or child, press down at least 2 inches. Make sure not to press on ribs. For an infant, press down about 1 and 1/2 inches. Make sure not to press on the end of the breastbone. 3)Do chest compressions only, at the rate of 100-120 per minute or more. Let the chest rise completely between pushes. 4)Check to see if the person has started breathing.";
}
else if (input.includes("what steps to take in a cpr??")) {
    output = "1)For an adult or child, place the heel of one hand on the center of the chest at the nipple line. You can also push with one hand on top of the other. For an infant, place two fingers on the breastbone. 2)For an adult or child, press down at least 2 inches. Make sure not to press on ribs. For an infant, press down about 1 and 1/2 inches. Make sure not to press on the end of the breastbone. 3)Do chest compressions only, at the rate of 100-120 per minute or more. Let the chest rise completely between pushes. 4)Check to see if the person has started breathing.";
}
else if (input.includes("how to help a drowning person in cpr?")) {
    output = "1)For an adult or child, place the heel of one hand on the center of the chest at the nipple line. You can also push with one hand on top of the other. For an infant, place two fingers on the breastbone. 2)For an adult or child, press down at least 2 inches. Make sure not to press on ribs. For an infant, press down about 1 and 1/2 inches. Make sure not to press on the end of the breastbone. 3)Do chest compressions only, at the rate of 100-120 per minute or more. Let the chest rise completely between pushes. 4)Check to see if the person has started breathing.";
}
else if (input.includes("how do you treat a fracture?")) {
    output = "1)Stop any bleeding. Apply pressure to the wound with a sterile bandage, a clean cloth or a clean piece of clothing. 2)Immobilize the injured area. Don't try to realign the bone or push a bone that's sticking out back in. If you've been trained in how to splint and professional help isn't readily available, apply a splint to the area above and below the fracture sites. Padding the splints can help reduce discomfort. 3)Apply ice packs to limit swelling and help relieve pain. Don't apply ice directly to the skin. Wrap the ice in a towel, piece of cloth or some other material. 4)Treat for shock. If the person feels faint or is breathing in short, rapid breaths, lay the person down with the head slightly lower than the trunk and, if possible, elevate the legs.";
}
else if (input.includes("what to do if i get a fracture?")) {
    output = "1)Stop any bleeding. Apply pressure to the wound with a sterile bandage, a clean cloth or a clean piece of clothing. 2)Immobilize the injured area. Don't try to realign the bone or push a bone that's sticking out back in. If you've been trained in how to splint and professional help isn't readily available, apply a splint to the area above and below the fracture sites. Padding the splints can help reduce discomfort. 3)Apply ice packs to limit swelling and help relieve pain. Don't apply ice directly to the skin. Wrap the ice in a towel, piece of cloth or some other material. 4)Treat for shock. If the person feels faint or is breathing in short, rapid breaths, lay the person down with the head slightly lower than the trunk and, if possible, elevate the legs.";
}
else if (input.includes("which medicine to take if i have a fracture?")) {
    output = "1)Stop any bleeding. Apply pressure to the wound with a sterile bandage, a clean cloth or a clean piece of clothing. 2)Immobilize the injured area. Don't try to realign the bone or push a bone that's sticking out back in. If you've been trained in how to splint and professional help isn't readily available, apply a splint to the area above and below the fracture sites. Padding the splints can help reduce discomfort. 3)Apply ice packs to limit swelling and help relieve pain. Don't apply ice directly to the skin. Wrap the ice in a towel, piece of cloth or some other material. 4)Treat for shock. If the person feels faint or is breathing in short, rapid breaths, lay the person down with the head slightly lower than the trunk and, if possible, elevate the legs.";
}
else if (input.includes("how to cure a fracture?")) {
    output = "1)Stop any bleeding. Apply pressure to the wound with a sterile bandage, a clean cloth or a clean piece of clothing. 2)Immobilize the injured area. Don't try to realign the bone or push a bone that's sticking out back in. If you've been trained in how to splint and professional help isn't readily available, apply a splint to the area above and below the fracture sites. Padding the splints can help reduce discomfort. 3)Apply ice packs to limit swelling and help relieve pain. Don't apply ice directly to the skin. Wrap the ice in a towel, piece of cloth or some other material. 4)Treat for shock. If the person feels faint or is breathing in short, rapid breaths, lay the person down with the head slightly lower than the trunk and, if possible, elevate the legs.";
} else {
    // output = "Sorry, I don't understand that. Please try something else.";
    output =
      "this is what i found on internet regarding " +
        input.replace("flash", "") || input.replace("flash", "");
    window.open(
      `https://www.google.com/search?q=${input.replace("flash", "")}`,
      "_blank"
    );
  }
  return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    let output = chatbot(input);
    setTimeout(function () {
      displayBotMessage(output);
    }, 1000);
    document.getElementById("input").value = "";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    sendMessage();
  }
});
