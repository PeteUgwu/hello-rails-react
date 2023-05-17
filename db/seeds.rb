greetings = [
  "Hello, how are you?",
  "Hey there! Welcome to our platform. We're glad you're here!",
  "Warm greetings to you!",
  "Hi there! We're excited to have you here.",
  "I hope you have a fantastic day ahead."
]

greetings.each do |content|
  Message.create!(content: content)
end