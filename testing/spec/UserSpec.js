describe('User class', function() {
		it('has six attributes: name, age, gender, allergies, sleep_apnea, and heart_disease', function() {

			class User {
			  constructor(name, age, gender, allergies, sleep_apnea, heart_disease) {
			    this.name = name;
			    this.age = age;
			    this.gender = gender;
			    this.allergies = allergies;
			    this.sleep_apnea = sleep_apnea;
			    this.heart_disease = heart_disease;
			  }
			}

			var kelly = new User('Kelly', 50, 'female', 'true', 'false', 'false')
			var josh = new User('Josh', 40, 'male', 'false', 'true', 'false')
			var brad = new User('Brad', 20, 'male', 'false', 'false', 'true')

			expect(kelly.name).toBe('Kelly')
			expect(josh.gender).toBe('male')
			expect(josh.sleep_apnea).toBe('true')
			expect(josh.heart_disease).toBe('false')
			expect(brad.age).toBe(20)
			expect(brad.heart_disease).toBe('true')
		});
});
