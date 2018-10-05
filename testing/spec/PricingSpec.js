describe('getPrice function', function() {

	var kelly
	var josh
	var brad
	var tinyTim

	beforeEach(function() {

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

		kelly = new User('Kelly', 50, 'female', 'true', 'false', 'false')
		josh = new User('Josh', 40, 'male', 'false', 'true', 'false')
		brad = new User('Brad', 20, 'male', 'false', 'false', 'true')
		tinyTim = new User('Tim', 6, 'male', 'false', 'false', 'false')
	});

		it('can be called with a user as an argument, and return a price', function() {
			expect( getPrice(kelly) ).toBe(210.2)
		});

		it('can be called with Kelly as an argument, and return $210.2', function() {
			expect( getPrice(kelly) ).toBe(210.2)
		})

		it('can be called with Josh as an argument, and return $190.80', function() {
			expect( getPrice(josh) ).toBe(190.80)
		})

		it('can be called with Brad as an argument, and return $117', function() {
			expect( getPrice(brad) ).toBe(117)
		})

		it('can be called with Tiny Tim as an argument, and return an error message', function() {
			expect( getPrice(tinyTim) ).toBe("ERROR! Must be over 18 to purchase this life insurance policy. Sorry!")
		})

	});
