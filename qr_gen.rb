require 'json'
require 'rqrcode'
system 'clear'

puts "We are going to generate your unique qr code"
puts "What is your first name?"
first_name = gets.chomp

puts "What is your last name?"
last_name = gets.chomp

puts "What is your twitter username?"
twitter_username = gets.chomp
twitter_url = "https://twitter.com/#{twitter_username}"

puts "What is your instagram username?"
instagram_username = gets.chomp
instagram_url = "https://www.instagram.com/#{instagram_username}"

puts "What is your github username?"
github_username = gets.chomp
github_url = "https://github.com/#{github_username}"

user_id = rand 999

user_json = {
	'id' => user_id,
	'first_name' => first_name,
	'last_name' => last_name,
	'twitter' => twitter_url,
	'instagram' => instagram_url,
	'twitter_photo' => "#{twitter_url}/photo",
	'github' => github_url
}

File.write('generated_json.json', JSON[user_json])

qrcode = RQRCode::QRCode.new(JSON[user_json])
# With default options specified explicitly
png = qrcode.as_png(
					resize_gte_to: false,
					resize_exactly_to: false,
					fill: 'white',
					color: 'black',
					size: 500,
					border_modules: 1,
					module_px_size: 6,
					file: nil # path to write
					)

IO.write("src/qr.png", png.to_s)
command = "open src/qr.png"
system command
puts "QR code has been successfully generated."