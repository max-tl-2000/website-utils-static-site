/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React,  {useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#343434'
  },
})

function Footer() {

  const classes = useStyles()
  const navigation = useRef(null)

  useEffect(() => {

    window.Reva.ui.createNavigationWidget(navigation.current, {
      onNavigationItemClick: function onNavigationItemClick(args) {
        window.Reva.navigator.navigateTo(args.url);
      }
    });
  
    window.Reva.ui.createUserActivityWidget();

  }, [navigation])

  return (
    <div id="footer" className={classes.root}>
      <div id="navigation" ref={navigation}></div>
      <div className="footerNav cWrapper">
        <div className="navigationLinks">
          <a href="/">Home</a>
          <a href="/residents">Residents</a>
          <a href="/investors">Investors</a>
          <a href="/about">About</a>
        </div>
      </div>
      <div className="smallFooter">
        <div className="cWrapper">
          <p className="copyright">Copyright © Tyrell. All Rights Reserved. Privacy Statement</p>
          <a className="footerLink" href="mailto:support@reva.tech">Tyrell email</a>
        </div>
      </div>
    </div>
  )
}

export default Footer