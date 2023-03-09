// run `node index.js` in the terminal
const path = require('path');
console.log(__dirname);
console.log(path.join(__dirname, '../..'));
/*


const getLoanerAgreementContent = (
  id: string,
  serviceVisitID: number,
  loanerAgreementDetails: Optional<LoanerAgreementRes>,
  boundedActions: SVTrackerSelectorBoundedActions,
  requestSource: RouteName | ServiceRoutes,
): Partial<TrackerBaseContent> => {
  const isLoanerAgreementReady = !isNothing(loanerAgreementDetails);
  if (isLoanerAgreementReady) {
    const {acceptanceDate, approverName} = loanerAgreementDetails ?? {};
    return {
      showNotificationDot:
        loanerAgreementDetails?.acceptanceStatus === ServiceDocumentApprovalStatus.PENDING_APPROVAL,
      trackerStageContent: [
        {
          type: "Description",
          content: {
            text:
              loanerAgreementDetails?.acceptanceStatus === ServiceDocumentApprovalStatus.APPROVED
                ? tr("sv_tracker_loaner_agreement_accepted", {
                    ACCEPTED_DATE: getFormattedDate({date: acceptanceDate ?? ""}),
                    ACCEPTED_USER_NAME: approverName,
                  })
                : tr("sv_tracker_loaner_agreement"),
            automationProps: automationID("tracker_loaner_agreement_status"),
          },
        },
        {
          type: "Link",
          content: {
            text: tr("sv_tracker_view_loaner_agreement"),
            onPress: () => {
              navigate(ServiceRoutes.LoanerAgreementScreen, {sourceScreen: requestSource});
              FirebaseAnalytics.logEvent(AnalyticsEvents.SERVICE_VIEW_LOANER_AGREEMENT, {
                screen: ServiceScreens.SERVICE_TRACKER_SCREEN,
              });
            },
            automationProps: automationID("tracker_loaner_agreement"),
          },
        },
        ...((loanerAgreementDetails?.acceptanceStatus === ServiceDocumentApprovalStatus.PENDING_APPROVAL
          ? [
              {
                type: "Button",
                content: {
                  children: tr("button_accept"),
                  appearance: ButtonAppearance.FILLED,
                  onPress: () =>
                    boundedActions.acceptLoanerAgreement({serviceVisitID, sourceScreen: requestSource}),
                  style: {
                    marginTop: 2 * Gutter,
                  },
                  automationProps: automationID("tracker_accept_loaner_agreement_button"),
                },
              },
            ]
          : []) as TrackerComponentProps[]),
      ],
    };
  }
  return {};
};
*/
