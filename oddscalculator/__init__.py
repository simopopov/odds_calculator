class OddsCalculator:
	def __init__(self, odds):
		if type(odds) not in(float, int) or not odds:
			message = "{} is not a valid odds".format(odds)
			raise ValueError(message)
		self.decimal = None
		self.malay = None
		self.american = None
		self.hongkong = None
		self.indonesian = None

	def decimal_to_american(self):
		if self.decimal < 2.0:
			american = (-100.0)/(self.decimal - 1.0)
		else:
			american = (self.decimal - 1.0) * 100.0
		return round(american, 2)

	def decimal_to_hongkong(self):
		hongkong = self.decimal-1
		return round(hongkong, 2)

	def decimal_to_malay(self):
		malay = self.decimal -1 if self.decimal <=2 else 1.0 / (1.0-self.decimal)
		return round(malay, 2)

	def decimal_to_indonesian(self):
		indonesian = self.decimal -1 if self.decimal >=2 else 1.0 / (1.0-self.decimal)
		return round(indonesian, 2)

	def malay_to_decimal(self):
		decimal = self.malay + 1.0 if self.malay > 0.0 else 1.0 - (1.0 / self.malay)
		return round(decimal, 2)

	def american_to_decimal(self):
		if self.american >=0:
			return round((float(self.american)/100.0) + 1.0, 2)
		else:
			return round(100.0/float(abs(self.american)) + 1.0, 2)

	def hongkong_to_decimal(self):
		return round(self.hongkong + 1.0, 2)

	def indonesian_to_decimal(self):
		if self.indonesian >= 1.0:
			return round(self.indonesian+1.0, 2)
		else:
			return round(1.0 - (1.0 / self.indonesian) ,2)


class DecimalOdds(OddsCalculator):
	def __init__(self, odds):
		OddsCalculator.__init__(self, odds)
		self.decimal = odds
		self.malay = self.decimal_to_malay()
		self.american = self.decimal_to_american()
		self.hongkong = self.decimal_to_hongkong()
		self.indonesian = self.decimal_to_indonesian()

class MalayOdds(OddsCalculator):
	def __init__(self, odds):
		OddsCalculator.__init__(self, odds)
		self.malay = odds
		self.decimal = self.malay_to_decimal()
		self.american = self.decimal_to_american()
		self.hongkong = self.decimal_to_hongkong()
		self.indonesian = self.decimal_to_indonesian()

class AmericanOdds(OddsCalculator):
	def __init__(self, odds):
		OddsCalculator.__init__(self, odds)
		self.american = odds
		self.decimal = self.american_to_decimal()
		self.malay = self.decimal_to_malay()
		self.hongkong = self.decimal_to_hongkong()
		self.indonesian = self.decimal_to_indonesian()

class HongkongOdds(OddsCalculator):
	def __init__(self, odds):
		OddsCalculator.__init__(self, odds)
		self.hongkong = odds
		self.decimal = self.hongkong_to_decimal()
		self.malay = self.decimal_to_malay()
		self.american = self.decimal_to_american()
		self.indonesian = self.decimal_to_indonesian()

class IndonesianOdds(OddsCalculator):
	def __init__(self, odds):
		OddsCalculator.__init__(self, odds)
		self.indonesian = odds
		self.decimal = self.indonesian_to_decimal()
		self.malay = self.decimal_to_malay()
		self.american = self.decimal_to_american()
		self.hongkong = self.decimal_to_hongkong()