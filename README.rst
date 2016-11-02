Odds Calculator
--------

Simply install via pip:

pip install oddscalculator

You can check the `documentation <https://pythonhosted.org/oddscalculator/>`_

To use oddscalculator, simply do::

    >>> from oddscalculator import DecimalOdds, MalayOdds, AmericanOdds, IndonesianOdds, HongkongOdds

    >>> odds = DecimalOdds(1.72)
    >>> print odds.decimal
    >>> print odds.american
    >>> print odds.malay
    >>> print odds.indonesian
    >>> print odds.hongkong

    >>> odds = AmericanOdds(-139)
    >>> print odds.decimal
    >>> print odds.american
    >>> print odds.malay
    >>> print odds.indonesian
    >>> print odds.hongkong

    >>> odds = MalayOdds(0.72)
    >>> print odds.decimal
    >>> print odds.american
    >>> print odds.malay
    >>> print odds.indonesian
    >>> print odds.hongkong

    >>> odds = IndonesianOdds(0.72)
    >>> print odds.decimal
    >>> print odds.american
    >>> print odds.malay
    >>> print odds.indonesian
    >>> print odds.hongkong

    >>> odds = HongkongOdds(-1.39)
    >>> print odds.decimal
    >>> print odds.american
    >>> print odds.malay
    >>> print odds.indonesian
    >>> print odds.hongkong