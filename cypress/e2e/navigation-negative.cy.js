describe('Mobile Navigation Components', () => {
  beforeEach(() => {
    // Visit the example project page before each test
    cy.visit('/example-project');
    // Set viewport to mobile size
    cy.viewport(375, 667);
  });

  it('should have horizontally scrollable navigation bar fixed at the top', () => {
    // Check that the horizontal navigation is visible and fixed
    cy.get('.md\\:hidden.fixed.top-14').should('exist');
    
    // Check that ScrollArea exists for horizontal scrolling
    cy.get('.md\\:hidden.fixed.top-14 .overflow-x-auto').should('exist');
    
    // Verify we have multiple buttons that can be clicked
    cy.get('.md\\:hidden.fixed.top-14 button').should('have.length.at.least', 4);
    
    // Verify buttons are centered vertically
    cy.get('.md\\:hidden.fixed.top-14 button').should('have.class', 'flex');
    cy.get('.md\\:hidden.fixed.top-14 button').should('have.class', 'items-center');
    cy.get('.md\\:hidden.fixed.top-14 button').should('have.class', 'justify-center');
  });

  it('should show shadow effect on the navigation bar when scrolled', () => {
    // Initially shouldn't have shadow
    cy.get('.md\\:hidden.fixed.top-14').should('not.have.class', 'shadow-md');
    
    // Scroll down and check for shadow class
    cy.scrollTo(0, 100);
    cy.get('.md\\:hidden.fixed.top-14').should('have.class', 'shadow-md');
  });

  it('should have a working vertical navigation menu button', () => {
    // Check that the menu button exists
    cy.get('.fixed.top-4.right-4 button').should('exist');
    
    // Check that it's properly sized and styled (rounded, centered)
    cy.get('.fixed.top-4.right-4 button').should('have.class', 'rounded-full');
    cy.get('.fixed.top-4.right-4 button').should('have.class', 'flex');
    cy.get('.fixed.top-4.right-4 button').should('have.class', 'items-center');
    cy.get('.fixed.top-4.right-4 button').should('have.class', 'justify-center');
    
    // Click to open the vertical menu
    cy.get('.fixed.top-4.right-4 button').click();
    
    // Verify the sheet content appears
    cy.get('.w-72.p-0').should('be.visible');
    
    // Verify the navigation buttons are present in the sheet
    cy.get('.w-72.p-0 button').should('have.length.at.least', 4);
  });

  it('should navigate to the correct section when vertical menu buttons are clicked', () => {
    // Open the vertical menu
    cy.get('.fixed.top-4.right-4 button').click();
    
    // Click on a navigation item
    cy.contains('.w-72.p-0 button', 'Design').click();
    
    // Verify navigation closed the sheet
    cy.get('.w-72.p-0').should('not.exist');
    
    // Verify we navigated to the correct section
    cy.hash().should('eq', '#design');
    cy.get('#design').should('be.visible');
  });

  it('should maintain proper vertical alignment of buttons in both navigations', () => {
    // Check horizontal navigation buttons alignment
    cy.get('.md\\:hidden.fixed.top-14 .flex.items-center.h-full').should('exist');
    cy.get('.md\\:hidden.fixed.top-14 button').first().then($el => {
      const buttonHeight = $el.outerHeight();
      const containerHeight = $el.parent().outerHeight();
      // Button should have consistent height
      expect(buttonHeight).to.be.closeTo(40, 5); // h-10 is roughly 40px
    });
    
    // Check vertical navigation buttons
    cy.get('.fixed.top-4.right-4 button').click();
    cy.get('.w-72.p-0 nav button').first().then($el => {
      const buttonHeight = $el.outerHeight();
      // Verify button has proper height
      expect(buttonHeight).to.be.closeTo(56, 5); // h-14 is roughly 56px
    });
  });
});describe('Example Project Navigation - Current Failing Behavior', () => {
  beforeEach(() => {
    // Visit the example project page before each test
    cy.visit('/example-project');
  });

  it('fails because buttons navigate to different routes instead of scrolling to sections', () => {
    // Check desktop navigation behavior
    cy.viewport(1200, 800);
    
    // The current behavior navigates to new routes instead of scrolling to sections
    cy.contains('button', 'Design').click();
    // Current behavior: URL changes to a new route
    cy.url().should('include', '/example-project/payment-system');
    // But we expect to stay on the same page and scroll to a section
    // This test should fail because we're not maintaining content continuity
    cy.get('h1').should('contain', 'Example Project: Payment System');
    
    // Similarly for other navigation items
    cy.contains('button', 'Services').click();
    cy.url().should('include', '/example-project/payment-system-services');
    // Each navigation creates a new page load which isn't the desired behavior
    cy.get('h1').should('contain', 'Example Project: Payment System');
    
    // We can't actually check for scroll behavior yet because the buttons don't 
    // scroll to sections - they navigate to different routes
  });
});describe('Example Project Navigation', () => {
  beforeEach(() => {
    // Visit the example project page before each test
    cy.visit('/example-project');
  });

  it('should have working desktop navigation buttons', () => {
    // Check that all navigation buttons exist in desktop view
    cy.viewport(1200, 800); // Desktop size
    
    // Check Overview button
    cy.contains('button', 'Overview').should('be.visible')
      .click();
    cy.url().should('include', '/example-project');
    
    // Check Design button
    cy.contains('button', 'Design').should('be.visible')
      .click();
    cy.url().should('include', '/example-project/payment-system');
    
    // Check Services button
    cy.contains('button', 'Services').should('be.visible')
      .click();
    cy.url().should('include', '/example-project/payment-system-services');
    
    // Check Gateway button
    cy.contains('button', 'Gateway').should('be.visible')
      .click();
    cy.url().should('include', '/example-project/payment-system-services-gateway');
    
    // Check Processor button
    cy.contains('button', 'Processor').should('be.visible')
      .click();
    cy.url().should('include', '/example-project/payment-system-services-processor');

    // Check Analytics button
    cy.contains('button', 'Analytics').should('be.visible')
      .click();
    cy.url().should('include', '/example-project/payment-system-services-analytics');
  });

  it('should have working mobile navigation buttons', () => {
    // Check that all navigation buttons exist in mobile view
    cy.viewport(375, 667); // Mobile size
    
    // Check each button exists and works in the mobile navigation
    cy.contains('button', 'Overview').should('be.visible')
      .click();
    cy.url().should('include', '/example-project');
    
    cy.contains('button', 'Design').should('be.visible')
      .click();
    cy.url().should('include', '/example-project/payment-system');
    
    cy.contains('button', 'Services').should('be.visible')
      .click();
    cy.url().should('include', '/example-project/payment-system-services');
    
    cy.contains('button', 'Gateway').should('be.visible')
      .click();
    cy.url().should('include', '/example-project/payment-system-services-gateway');
    
    cy.contains('button', 'Processor').should('be.visible')
      .click();
    cy.url().should('include', '/example-project/payment-system-services-processor');

    cy.contains('button', 'Analytics').should('be.visible')
      .click();
    cy.url().should('include', '/example-project/payment-system-services-analytics');
  });

  it('should highlight the active navigation item', () => {
    cy.viewport(1200, 800); // Desktop size
    
    // Click on Design and verify it's active
    cy.contains('button', 'Design').click();
    cy.contains('button', 'Design').should('have.class', 'border-docs-accent');
    
    // Click on Services and verify it's active
    cy.contains('button', 'Services').click();
    cy.contains('button', 'Services').should('have.class', 'border-docs-accent');
    cy.contains('button', 'Design').should('not.have.class', 'border-docs-accent');
  });

  it('should scroll to the correct section when desktop navigation buttons are clicked', () => {
    // Desktop viewport
    cy.viewport(1200, 800);
    
    // Test Design button scrolls to design section
    cy.contains('button', 'Design').click();
    // Verify URL has hash and section is visible
    cy.hash().should('eq', '#design');
    cy.get('#design').should('be.visible');
    
    // Test Services button scrolls to services section
    cy.contains('button', 'Services').click();
    cy.hash().should('eq', '#services');
    cy.get('#services').should('be.visible');
    
    // Test Gateway button scrolls to gateway section
    cy.contains('button', 'Gateway').click();
    cy.hash().should('eq', '#gateway');
    cy.get('#gateway').should('be.visible');
    
    // Test Processor button scrolls to processor section
    cy.contains('button', 'Processor').click();
    cy.hash().should('eq', '#processor');
    cy.get('#processor').should('be.visible');
    
    // Test Analytics button scrolls to analytics section
    cy.contains('button', 'Analytics').click();
    cy.hash().should('eq', '#analytics');
    cy.get('#analytics').should('be.visible');
    
    // Test Overview button scrolls to overview section
    cy.contains('button', 'Overview').click();
    cy.hash().should('eq', '#overview');
    cy.get('#overview').should('be.visible');
  });

  it('should scroll to the correct section when mobile navigation buttons are clicked', () => {
    // Mobile viewport
    cy.viewport(375, 667);
    
    // Test Design button scrolls to design section
    cy.contains('button', 'Design').click();
    cy.hash().should('eq', '#design');
    cy.get('#design').should('be.visible');
    
    // Test Services button scrolls to services section 
    cy.contains('button', 'Services').click();
    cy.hash().should('eq', '#services');
    cy.get('#services').should('be.visible');
    
    // Test Gateway button scrolls to gateway section
    cy.contains('button', 'Gateway').click();
    cy.hash().should('eq', '#gateway');
    cy.get('#gateway').should('be.visible');
    
    // Test Processor button scrolls to processor section
    cy.contains('button', 'Processor').click();
    cy.hash().should('eq', '#processor');
    cy.get('#processor').should('be.visible');
    
    // Test Analytics button scrolls to analytics section
    cy.contains('button', 'Analytics').click();
    cy.hash().should('eq', '#analytics');
    cy.get('#analytics').should('be.visible');
  });

  it('should highlight the active section button when scrolled to that section', () => {
    cy.viewport(1200, 800);
    
    // Test scrolling to design section highlights Design button
    cy.get('#design').scrollIntoView();
    cy.contains('button', 'Design').should('have.class', 'border-docs-accent');
    
    // Test scrolling to services section highlights Services button
    cy.get('#services').scrollIntoView();
    cy.contains('button', 'Services').should('have.class', 'border-docs-accent');
    
    // Test scrolling to gateway section highlights Gateway button
    cy.get('#gateway').scrollIntoView();
    cy.contains('button', 'Gateway').should('have.class', 'border-docs-accent');
  });
});