<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" xmlns:xsl="https://www.w3.org/TR/xml-stylesheet/"> 
<xsl:output method="html" indent="yes" />
<xsl:template match="/"> 
 <html> 
  <body> 
     <h1 style="color:Red"><xsl:value-of select="hello"/></h1>
  </body> 
 </html> 
</xsl:template> 
</xsl:stylesheet> 