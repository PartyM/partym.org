+++
categories = [ "issue" ]
date = 2017-12-01T14:59:37-06:00
description = "PartyM Individual Income Tax Policy"
draft = false
tags = [ "issue", "taxes"]
title= "Taxes"
toc = false
+++

### Individual Income Tax

### Calculator

{{< issues_taxes >}}

### Synopsis

We want to completely overhaul our tax code which has become too complicated [1]. A complicated code hurts both 

1. the citizens by creating undue burden/confusion and 
1. the government by not allowing for proper budgeting or forecasting and requiring a large IRS 

The only real winners are those who can take advantage of every deduction possible. Our idea is to **remove tax brackets entirely and apply a standard mathematical formula based solely on income.** 

This would significantly simplify the tax code and shrink the IRS. Popular methods of lowering taxable income are still availalbe and popular tax credits (i.e. Child tax credit, etc) would still exist but would be delivered via another mechanism. Our changes to the tax code will return more value to the lower working classes while still being fair to the upper classes.

### The Algorithm

The basis for the algorithm is the formula for Linear Interpolation [2]. We use formula to define our tax rate between a starting point and a high point. Your income is calculated on this line and defines your tax rate for that year. The basis is the following formula:

$$Trate = Istart + (I - Istart)\frac{Rmax - Rmin}{Imax - Istart}$$

where 

$$Rmin = 0$$

\\[Rmax = 25\\]

\\[Istart = 15081\\]

\\[Imax = 300000\\]

\\[I = income\\]


Beyond the base formula we also impose the following rules: 

1. All collectible amounts are rounded up to the nearest dollar.
1. The tax rate is 0% at or below the poverty line.
1. We define the **standard** maximum tax rate as 25% but this can be variable based on the controlling body. We expect that in a strong economy, this could be raised up to 30%.
1. All incomes greater than or equal to $300,000 are taxed at maximum tax rate.

### Rationale

The initial bracket is 10% meaning the poorest citizens have to give up 10% of their income throughout the year. These citizens will see a return but they'll have to wait until Taxes are filed to get it. Strangely, the effective tax rate actually goes down then increases as expected and finally it levels out before dipping again slightly at the highest level.
 
<div class="container">
    <img class="responsive-img" src="https://storage.googleapis.com/static.partym.org/issues/taxes/2015%20-%20income%20classes.png"> </img>
</div>
<div class="container">
    <img class="responsive-img" src="https://storage.googleapis.com/static.partym.org/issues/taxes/2015-partym.png"> </img>
</div>

***Based on 2015 IRS data[3]**

***These graphs are misleading due to the scale of the x-axis, which changes dramatically in the upper incomes. The rate of growth for all of these plans is not as aggressive as it first seems.**

The credits and deductions in the current tax code also cause many issues. There are so many deductions and credits that it’s hard to know if you’ve used all available to you and legislative bodies may accidently introduce loopholes due to a lack of understanding of all available deductions.
These only have substantial impact to those who are able itemize their returns and those taking the standard deduction will never be able to receive. This means that incentives are lost to those who cannot possibly leverages these credits. It's also impossible to know how much you'll actually owe in taxes until after you've filed, making budgeting difficult.

On Tax returns; Receiving a large tax return feels great (feels like free money) but the reality is that this money was yours all year long. You have effectively loaned it to the government until you’ve filed your taxes and they are returning the portion that you’ve overpaid. In our model, the goal is to remove these returns and get everyone to pay “just the right amount” to the government, freeing up this money throughout the year for the citizens.

There are more general issues such as the inability for the IRS to be audit everyone or be sure the the system isn’t being abused. The complicated nature of deductions has caused an entire industry to be created around them. This industry does provide a valuable service but it's unfortunate that it needs to exist.

Finally, the tax code has been used as a vehicle for entitlements. The tax code is an easy way to credit and pass out a new entitlement but this model has become too bloated with too many entitlements. Due to these entitlements, reforming the tax code is extremely difficult since minor changes can have drastic impacts on an entitlements that many people rely on.

### Revenue Comparisons

#### 2010 - 2015
Below is the comparison from 2015 IRS data. As you can see, if the maximum tax rate is at 25%, this model results in ~5.6% less tax revenue. However, since the economy has been strong for many years, it's likely the maximum tax rate would have been raised to 30% which results in a ~13.4% tax revenue gain.

<div class="intrinsic-container">
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5P8ctMjtDEjJl1nYrbzF-VnN3x6fLUAUnaflX-r20SsiK3uxbBY0QfkYXQpD3eA_8CnMAvmQwcW1-/pubhtml?gid=97905787&amp;single=true&amp;widget=true&amp;headers=false" allowfullscreen></iframe>
</div>

Let's compare starting back at 2010 with PartyM's maximum tax rate at 25%. We'll then add 1% to the maximum every year until 2015.


<div class="intrinsic-container" style="height:260px;">
    <iframe style="height:260px;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5P8ctMjtDEjJl1nYrbzF-VnN3x6fLUAUnaflX-r20SsiK3uxbBY0QfkYXQpD3eA_8CnMAvmQwcW1-/pubhtml?gid=997658946&amp;single=true&amp;widget=true&amp;headers=false" allowfullscreen></iframe>
</div>

This example would have resulted in an additional ~$1 Trillion revenue gain over the last 5 years for the federal government without dramatically impacting anyone's tax rate year by year. 

***Due to the non-granular nature of the data released by the IRS, our calculations use the mean of each income range to do our comparison calculations.**

#### Cost Savings

The IRS operates on a $11.5B+ budget[9] per year. Such a budget would place the IRS comfortably in the Fortune 500 list if it were an external company. We believe the IRS could operate on a $1B to 2B per year budget with such a simple model. This would save $10B+/yr to the federal budget.

### Winners and losers?

Who wins and who loses in this model?

Winners:

> Everyone should see a lower effective tax rate when our maximum tax rate is 25%.

> Everyone (including companies) should enjoy a simpler tax filing process. Assuming the tax filing market is rationale, we should also see a reduction in cost to file taxes.

Losers:

> Individuals abusing the deduction and credits system giving them drastically lower tax rates.

> Tax professionals and corporations focused on individual tax returns.

### Popular Deductions / Credits / Loopholes

Popular deductions like the child tax credit would be delivered via another mechanism such as a new nonprofit or appropriate government entity. These credits would all have diminishing returns making them more effective at lower income levels and diminishing to $0 at higher income levels, which is not dissimilar to their effect on the taxable income today.

#### Lowering taxable income

We will continue to allow individuals and corporations to reduce their taxable income for the following reasons:

1. 401k Contributions
1. IRAs
1. Charitable giving
1. State taxes paid

#### What about …?

There are a number of other popular deductions, credits and other features of our tax system not accounted for yet. Here is a running list and our initial (still to be fully thought out) ideas on our approach to them:

1. Corporate tax - The corporate tax rate will follow the same model as the individual tax rate algorithm described in this article. The revenue targets will change significantly however. Likely, the top tax percentage would only be applied to be applied to companies making ~$10B. The low end marker would be positioned such that extremely low revenue companies would not be taxed.

1. Non-profits - Not much is expected to change here. Non-profits will continue to operate tax free or at a flat 1% tax rate.

1. Long Term Capital Gains - We are still discussing the approproate approach here.

1. Property Taxes -  Credits here would ideally be delivered to property owners via their loan administration companies (for escrow accounts) or via the state (for non-escrow) accounts.

1. Higher education grants - These grants would not be part of your income calculation meaning you would not pay any taxes on them.

#### References

[1] https://www.law.cornell.edu/uscode/text/26

[2] https://en.wikipedia.org/wiki/Linear_interpolation

[3] https://www.irs.gov/pub/irs-soi/15databk.pdf

[4] https://www.irs.gov/pub/irs-soi/10databk.pdf

[5] https://www.irs.gov/pub/irs-soi/11databk.pdf

[6] https://www.irs.gov/pub/irs-soi/12databk.pdf

[7] https://www.irs.gov/pub/irs-soi/13databk.pdf

[8] https://www.irs.gov/pub/irs-soi/14databk.pdf

[9] https://www.irs.gov/statistics/irs-budget-and-workforce

#### Revision History

1 Dec 2017 - Initial Revision - [View all changes on Github ](https://github.com/PartyM/partym.org/commits/master/content/issues/taxes.md)<i class="fa fa-github fa-2x" aria-hidden="true"></i>
