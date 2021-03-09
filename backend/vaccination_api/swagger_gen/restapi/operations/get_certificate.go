// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"net/http"

	"github.com/go-openapi/runtime/middleware"

	"github.com/divoc/api/swagger_gen/models"
)

// GetCertificateHandlerFunc turns a function with the right signature into a get certificate handler
type GetCertificateHandlerFunc func(GetCertificateParams, *models.JWTClaimBody) middleware.Responder

// Handle executing the request and returning a response
func (fn GetCertificateHandlerFunc) Handle(params GetCertificateParams, principal *models.JWTClaimBody) middleware.Responder {
	return fn(params, principal)
}

// GetCertificateHandler interface for that can handle valid get certificate params
type GetCertificateHandler interface {
	Handle(GetCertificateParams, *models.JWTClaimBody) middleware.Responder
}

// NewGetCertificate creates a new http.Handler for the get certificate operation
func NewGetCertificate(ctx *middleware.Context, handler GetCertificateHandler) *GetCertificate {
	return &GetCertificate{Context: ctx, Handler: handler}
}

/* GetCertificate swagger:route GET /certificates getCertificate

Get certificate json

*/
type GetCertificate struct {
	Context *middleware.Context
	Handler GetCertificateHandler
}

func (o *GetCertificate) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		r = rCtx
	}
	var Params = NewGetCertificateParams()
	uprinc, aCtx, err := o.Context.Authorize(r, route)
	if err != nil {
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}
	if aCtx != nil {
		r = aCtx
	}
	var principal *models.JWTClaimBody
	if uprinc != nil {
		principal = uprinc.(*models.JWTClaimBody) // this is really a models.JWTClaimBody, I promise
	}

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params, principal) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}
