import 'package:divoc/base/common_widget.dart';
import 'package:divoc/base/theme.dart';
import 'package:divoc/forms/cerfify_details_form.dart';
import 'package:divoc/forms/navigation_flow.dart';
import 'package:divoc/forms/select_vaccine_form.dart';
import 'package:divoc/forms/single_field_form.dart';
import 'package:divoc/forms/upcoming_form.dart';
import 'package:divoc/generated/l10n.dart';
import 'package:divoc/home/custom_drawer.dart';
import 'package:divoc/home/flow_screen.dart';
import 'package:divoc/home/home_model.dart';
import 'package:divoc/home/home_repository.dart';
import 'package:divoc/model/patients.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class OperatorHomePage extends StatelessWidget {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  void openDrawer() {
    _scaffoldKey.currentState.openDrawer();
  }

  void closeDrawer() {
    if (_scaffoldKey.currentState.isDrawerOpen) {
      _scaffoldKey.currentState.openEndDrawer();
    }
  }

  @override
  Widget build(BuildContext context) {
    var homeRepository = context.watch<HomeRepository>();
    return ChangeNotifierProvider(
      create: (_) => HomeModel(homeRepository),
      builder: (context, widget) {
        return Scaffold(
          key: _scaffoldKey,
          drawer: CustomDrawer(this.closeDrawer),
          appBar: PreferredSize(
            preferredSize: Size.fromHeight(kToolbarHeight),
            child: DivocHeader(this.openDrawer),
          ),
          body: Theme(
            data: DivocTheme.operatorTheme,
            child: NavigationFormFlow(
              routes: _flows,
              builder: (routeInfo, arguments) {
                return getWidgetByRouteName(routeInfo, arguments);
              },
            ),
          ),
        );
      },
    );
  }
}

Widget getWidgetByRouteName(RouteInfo routeInfo, Object arguments) {
  switch (routeInfo.currentRouteName) {
    case '/':
      return DivocForm(
        title: DivocLocalizations.current.titleVerifyAadhaar,
        child: SingleFieldForm(
          title: "Enter PIN",
          btnText: "Confirm",
          onNext: (context, value) {
            NavigationFormFlow.push(
                context, routeInfo.nextRoutesMeta[0].fullNextRoutePath);
          },
        ),
      );

    case 'upcomingRecipients':
      return UpComingForm(
        onScanClicked: (context, PatientDetails patientDetails) {
          Navigator.of(context).pushNamed(
              routeInfo.nextRoutesMeta[0].fullNextRoutePath,
              arguments: patientDetails);
        },
      );

    case 'vaccineManually':
      return SelectVaccineManuallyForm(routeInfo);

    case 'certifyDetails':
      return CertifyDetailsForm(routeInfo);

    default:
      return FlowScreen(routeInfo.nextRoutesMeta, routeInfo.currentRoutePath);
  }
}

const List<String> _flows = [
  //Verify Recipient Flow
  '/upcomingRecipients',
  '/upcomingRecipients/vaccineManually',
  '/upcomingRecipients/vaccineManually/certifyDetails',
  '/upcomingRecipients/vaccineManually/certifyDetails/upcomingRecipients',
  '/upcomingRecipients/scanQR',
  '/upcomingRecipients/scanQR/certify',
  '/upcomingRecipients/scanQR/certify/upcomingRecipients',
];
