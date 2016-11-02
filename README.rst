Odds Calculator
--------

To use oddscalculator, simply do::

    >>> from oddscalculator import DecimalOdds, MalayOdds, AmericanOdds, IndonesianOdds, HongkongOdds
    >>> odds = DecimalOdds(2.1)
    >>> print odds.decimal
    >>> print odds.american
    >>> print odds.malay
    >>> print odds.indonesian
    >>> print odds.hongkong

    >>> odds = AmericanOdds(-130)
    >>> print odds.decimal
    >>> print odds.american
    >>> print odds.malay
    >>> print odds.indonesian
    >>> print odds.hongkong