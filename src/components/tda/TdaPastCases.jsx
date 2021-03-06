import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import Container from "../Container"
import Tabs from "@zlab-de/zel-react/Tabs"
import Tab from "@zlab-de/zel-react/Tab"

const useStyles = makeStyles(theme => ({
  name: {
    color: theme.logo.digitBlue.hex,
    marginBottom: `${theme.space.s.rem}rem`,
    fontSize: 18,
  },
  tagline: {
    marginBottom: `${theme.space.xl.rem}rem`,
  },
  bold: {
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: `${theme.space.s.rem}rem`,
  },
  margin: {
    marginBottom: `${theme.space.s.rem}rem`,
  },
  tab: {
    "&:hover": { borderBottomColor: theme.logo.digitBlue.hex },
  },
  tabSelected: {
    borderBottomColor: theme.logo.digitBlue.hex,
  },
  paper: {
    padding: `${theme.space.xl.rem * 2}rem`,
    background: theme.color.global.white.hex,
  },
}))

function TdaPastCases() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [value, setValue] = useState(0)
  function handleChange(newValue) {
    setValue(newValue)
  }

  const cases = ["transver", "oillab", "sparkplugs"]

  return (
    <Container background="secondary" title="Use Cases">
      <Tabs value={value} onClick={handleChange}>
        {cases.map((elem, idx) => (
          <Tab
            label={elem}
            ariaLabel={`tab${idx}`}
            key={`tab${idx}`}
            className={clsx(classes.tab, {
              [classes.tabSelected]: value === idx,
            })}
          />
        ))}
      </Tabs>
      <div className={classes.paper}>
        <h2 className={clsx(classes.name, "zep-typo--display-6")}>
          {t(`tda.${cases[value]}.type`)}
        </h2>
        <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
          {t(`tda.${cases[value]}.title`)}
        </p>
        <p className={classes.bold}>{t("problem")}</p>
        <p className={clsx(classes.margin, "zep-typo--normal-body1")}>
          {t(`tda.${cases[value]}.problem`)}
        </p>
        <p className={classes.bold}>{t("tda.solution")}</p>
        <p className="zep-typo--normal-body1">
          {t(`tda.${cases[value]}.solution`)}
        </p>
      </div>
    </Container>
  )
}

export default TdaPastCases
