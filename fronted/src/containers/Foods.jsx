import React, { Fragment } from 'react';

export const Foods = ({match}) => {
  return (
    <Fragment>
      フード一覧
      <p>
        restaurantIdは{match.params.restaurantsId}
      </p>
    </Fragment>
  )
}
